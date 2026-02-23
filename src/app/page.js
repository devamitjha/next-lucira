"use client";

import { useSelector, useDispatch } from "react-redux";
import { logout } from "@/redux/features/user/userSlice";
import LoginDialog from "@/components/auth/LoginDialog";
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
          <p>Welcome {user?.email}</p>
          <Button
            variant="destructive"
            onClick={() => dispatch(logout())}
          >
            Logout
          </Button>
        </div>
      ) : (
        <LoginDialog />
      )}
    </div>
  );
}