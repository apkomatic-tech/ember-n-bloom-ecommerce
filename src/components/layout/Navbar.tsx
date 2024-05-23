"use client";
import Link from "next/link";
import Menu from "./Menu.mobile";
import AccountLinks from "./AccountLinks";

const Navbar = () => {
  return (
    <header className="relative h-20 px-4 2xl:px-0">
      <div className="mx-auto h-full max-w-screen-2xl py-4">
        <div className="flex h-full items-center justify-between">
          <Link href="/">
            <div className="text-xl tracking-wider text-primary">
              Ember &amp; Bloom
            </div>
          </Link>
          <div className="hidden items-center gap-16 md:flex">
            <div className="items-center gap-6 md:hidden lg:flex">
              <Link href="/" className="hover:text-secondary">
                Home
              </Link>
              <Link href="/about" className="hover:text-secondary">
                About
              </Link>
              <Link href="/shop" className="hover:text-secondary">
                Shop
              </Link>
            </div>
            <div>
              <AccountLinks />
            </div>
          </div>
          <div className="md:hidden">
            <Menu />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
