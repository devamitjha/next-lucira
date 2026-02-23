/* ================= SEND OTP ================= */
export const sendOtpApi = async (mobile) => {
  const res = await fetch("/api/auth/send-otp", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ mobile }),
  });

  const data = await res.json();
  if (!res.ok) throw new Error(data.error);

  return data;
};

/* ================= VERIFY OTP ================= */
export const verifyOtpApi = async (mobile, otp) => {
  const res = await fetch("/api/auth/verify-otp", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ mobile, otp }),
  });

  const data = await res.json();
  if (!res.ok) throw new Error(data.error);

  return data;
};

/* ================= REGISTER ================= */
export const registerCustomer = async (payload) => {
  const res = await fetch("/api/auth/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  const data = await res.json();
  if (!res.ok) throw new Error(data.error);

  return data;
};