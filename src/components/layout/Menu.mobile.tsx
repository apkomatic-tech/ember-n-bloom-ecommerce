import { MenuIcon, UserIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

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
        <div className="absolute left-0 top-[80px] z-[10] flex h-[calc(100dvh-80px)] min-h-[400px] w-full flex-col items-center justify-center gap-6 bg-primary text-xl font-bold text-white">
          <Link href="/" onClick={closeMenu}>
            Home
          </Link>
          <Link href="/about" onClick={closeMenu}>
            About
          </Link>
          <Link href="/shop" onClick={closeMenu}>
            Shop
          </Link>
          <hr className="my-4 h-[2px] w-1/4 bg-white" />
          {isLoggedIn ? (
            <>
              <Link href="/account" className="flex items-center gap-1">
                <UserIcon width={20} height={20} /> Account
              </Link>
              <Link href="/signout">Sign Out</Link>
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
