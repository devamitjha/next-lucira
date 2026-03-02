import AuthGuard from "@/components/auth/AuthGuard";

export default function ProtectedPage() {
  return (
    <AuthGuard>
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl font-bold">
          This is Protected Page 🔒
        </h1>
      </div>
    </AuthGuard>
  );
}