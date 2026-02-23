"use client";

import { useRouter } from "next/navigation";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useDispatch } from "react-redux";
import { login } from "@/redux/features/user/userSlice";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";

export function AuthDialog({ open, onOpenChange, initialMobile = "" }) {
  const router = useRouter();
  const dispatch = useDispatch();

  /* ================= STATE ================= */
  const [step, setStep] = useState("login");
  const [mobile, setMobile] = useState(initialMobile || "");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);

  /* ================= HELPERS ================= */
  const validMobileNum = (num) => /^[6-9]\d{9}$/.test(String(num || "").trim());
  const validMobile = () => validMobileNum(mobile);

  useEffect(() => {
    if (initialMobile && validMobileNum(initialMobile)) {
      setMobile(String(initialMobile).trim());
    }
  }, [initialMobile]);

  const resetModal = () => {
    setStep("login");
    setMobile(initialMobile || "");
    setFirstName("");
    setLastName("");
    setOtp("");
    setLoading(false);
  };

  const loginSuccess = (data) => {
    dispatch(
      login({
        id: data.user?.id,
        mobile,
        name:
          data.user?.first_name && data.user?.last_name
            ? `${data.user.first_name} ${data.user.last_name}`
            : "User",
        token: data.token,
      })
    );

    toast.success("Login Successful");
    onOpenChange(false);
    resetModal();
    router.refresh(); // safer than push("/")
  };

  /* ================= LOGIN FLOW ================= */

  const sendLoginOtp = async () => {
    if (!validMobile()) return toast.error("Enter valid mobile");

    try {
      setLoading(true);

      const res = await fetch("/api/auth/send-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ mobile }),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.error);

      toast.success("OTP Sent");
      setStep("otp-login");

    } catch (err) {
      toast.error(err.message || "Failed to send OTP");
    } finally {
      setLoading(false);
    }
  };

  const verifyLoginOtp = async () => {
    if (otp.length < 4) return toast.error("Invalid OTP");

    try {
      setLoading(true);

      const res = await fetch("/api/auth/verify-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ mobile, otp }),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.error);

      if (data.status === "REGISTER_REQUIRED") {
        setStep("register");
        return;
      }

      if (data.status === "LOGIN") {
        loginSuccess(data);
      }

    } catch (err) {
      toast.error(err.message || "OTP verification failed");
    } finally {
      setLoading(false);
    }
  };

  /* ================= REGISTER FLOW ================= */

  const registerUser = async () => {
    if (!firstName.trim() || !lastName.trim())
      return toast.error("Enter full name");
    if (!validMobile())
      return toast.error("Enter valid mobile");

    try {
      setLoading(true);

      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName,
          lastName,
          mobile,
        }),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.error);

      if (data.status === "REGISTER_SUCCESS") {
        loginSuccess(data);
      }

    } catch (err) {
      toast.error(err.message || "Register failed");
    } finally {
      setLoading(false);
    }
  };

  /* ================= UI ================= */

  return (
    <Dialog
      open={open}
      onOpenChange={(v) => {
        onOpenChange(v);
        if (!v) resetModal();
      }}
    >
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            {step === "login" && "Login"}
            {step === "otp-login" && "Verify OTP"}
            {step === "register" && "Register"}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4 mt-4">

          {/* LOGIN */}
          {step === "login" && (
            <>
              <Input
                placeholder="Mobile"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                className="h-11"
              />
              <Button
                onClick={sendLoginOtp}
                disabled={loading}
                className="h-14 w-full"
              >
                {loading ? "Sending..." : "Send OTP"}
              </Button>
              <p
                className="text-center text-sm cursor-pointer"
                onClick={() => setStep("register")}
              >
                New user? Register
              </p>
            </>
          )}

          {/* OTP LOGIN */}
          {step === "otp-login" && (
            <>
              <Input
                placeholder="Enter OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                className="h-11"
              />
              <Button
                onClick={verifyLoginOtp}
                disabled={loading}
                className="h-14 w-full"
              >
                {loading ? "Verifying..." : "Verify"}
              </Button>
            </>
          )}

          {/* REGISTER */}
          {step === "register" && (
            <>
              <Input
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="h-11"
              />
              <Input
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="h-11"
              />
              <Button
                onClick={registerUser}
                disabled={loading}
                className="h-14 w-full"
              >
                {loading ? "Registering..." : "Register"}
              </Button>
              <p
                className="text-center text-sm cursor-pointer"
                onClick={() => setStep("login")}
              >
                Already registered? Login
              </p>
            </>
          )}

        </div>
      </DialogContent>
    </Dialog>
  );
}