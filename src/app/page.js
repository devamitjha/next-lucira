"use client";

import { useSelector, useDispatch } from "react-redux";
import { logout } from "@/redux/features/user/userSlice";
import { AuthDialog } from "@/components/auth/AuthDialog";
import { Button } from "@/components/ui/button";

export default function Home() {
  const dispatch = useDispatch();
  const { user, isAuthenticated } = useSelector(
    (state) => state.user
  );

  return (
    <div className="min-h-screen flex items-center justify-center">
      {isAuthenticated ? (
        <div className="space-y-4 text-center">
          <p>Welcome {user?.email || user?.name}</p>
          <Button
            variant="destructive"
            onClick={async () => {
              try {
                await fetch("/api/auth/logout", { method: "POST" });
              } catch (err) {
                console.error("failed to clear cookie", err);
              }
              dispatch(logout());
            }}
          >
            Logout
          </Button>
        </div>
      ) : (
        <AuthDialog />
      )}
    </div>
  );
}