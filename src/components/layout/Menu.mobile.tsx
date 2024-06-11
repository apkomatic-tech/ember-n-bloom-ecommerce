"use client";

import { CATEGORY_LINKS } from "@/constants";
import { MenuIcon, UserIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import SignoutButton from "../SignoutButton";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isLoggedIn = false;

  const handleMenuClick = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="flex items-center">
      <button onClick={handleMenuClick}>
        <MenuIcon />
        <span className="sr-only">Menu</span>
      </button>
      {isOpen && (
        <div className="absolute left-0 top-[80px] z-[10] flex h-[calc(100dvh-80px)] min-h-[400px] w-full flex-col items-center gap-6 bg-secondary pt-24 text-xl font-bold text-black/80">
          {CATEGORY_LINKS.map((link) => (
            <Link key={link.name} href={link.href} onClick={closeMenu}>
              {link.name}
            </Link>
          ))}

          <div className="b-0 my-1 block h-[1px] w-1/2 bg-black/10 md:w-1/4" />

          <Link href="/" onClick={closeMenu}>
            Home
          </Link>
          <Link href="/about" onClick={closeMenu}>
            About
          </Link>

          <div className="b-0 my-1 block h-[1px] w-1/2 bg-black/10 md:w-1/4" />
          {isLoggedIn ? (
            <>
              <Link href="/account" className="flex items-center gap-1">
                <UserIcon width={20} height={20} /> Account
              </Link>
              <SignoutButton className="w-full text-sm" />
            </>
          ) : (
            <div className="flex items-center gap-1">
              <UserIcon width={20} height={20} />
              <Link href="/login">Sign In</Link>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
export default Menu;
