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
import { useContext } from "react";
import { WixClientContext } from "@/app/context/WixClientStoreProvider";

const AccountLinks = () => {
  const wixClient = useContext(WixClientContext);
  const { user, loggedIn } = useClientAuth();
  console.log(user);
  if (loggedIn) {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger className="block h-full">
          <div className="flex items-center gap-1 text-sm">
            <UserIcon width={22} height={22} />
            <span>{user?.profile?.nickname ?? "Account"}</span>
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Link href="/account" className="w-full text-sm">
              Profile Page
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Button
              onClick={async () =>
                await wixClient.auth.logout(window.location.href)
              }
              className="w-full text-sm"
            >
              Sign Out
            </Button>
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
