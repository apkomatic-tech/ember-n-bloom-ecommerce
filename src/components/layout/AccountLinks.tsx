"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { UserIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import { useClientAuth } from "@/hooks/useClientAuth";
import SignoutButton from "../SignoutButton";

const AccountLinks = () => {
  const { user, loggedIn } = useClientAuth();
  if (loggedIn) {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger className="flex h-full items-center gap-1 text-sm">
          <UserIcon width={22} height={22} />
          <span>{user?.profile?.nickname ?? "Account"}</span>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem asChild>
            <Link href="/account" className="w-full text-sm">
              Profile Page
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <SignoutButton className="w-full text-sm" />
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }

  return (
    <div className="flex items-center gap-4">
      <Button size={"sm"} variant={"secondary"} asChild>
        <Link href="/login">Login</Link>
      </Button>
    </div>
  );
};

export default AccountLinks;
