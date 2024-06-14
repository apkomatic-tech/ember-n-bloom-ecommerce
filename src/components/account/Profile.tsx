"use client";

import { useClientAuth } from "@/hooks/useClientAuth";
import { useRouter } from "next/navigation";

export default function Profile() {
  const router = useRouter();
  const { user, isFetching } = useClientAuth();

  if (isFetching) {
    return <div>Loading user data...</div>;
  }

  return <div>Welcome, {user?.profile?.nickname ?? ""}</div>;
}
