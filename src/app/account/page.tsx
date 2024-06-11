"use client";

import { useClientAuth } from "@/hooks/useClientAuth";
import { useRouter } from "next/navigation";

export default function AccountPage() {
  const router = useRouter();
  const { user, loggedIn } = useClientAuth();
  if (!loggedIn) {
    router.push("/login");
  }

  return (
    <div>
      <h1 className="mb-4 text-2xl font-bold">Account Page</h1>
      <div>Welcome, {user?.profile?.nickname ?? ""}</div>
    </div>
  );
}
