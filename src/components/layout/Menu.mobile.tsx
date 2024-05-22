import { MenuIcon, UserIcon } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import AccountLinks from './AccountLinks';

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
        <div className="absolute flex justify-center items-center flex-col gap-6 text-xl top-[80px] left-0 w-full bg-primary h-[calc(100dvh-80px)] text-white font-bold">
          <Link href="/" onClick={closeMenu}>
            Home
          </Link>
          <Link href="/about" onClick={closeMenu}>
            About
          </Link>
          <Link href="/shop" onClick={closeMenu}>
            Shop
          </Link>
          <hr className="my-4 h-[2px] bg-white w-1/4" />
          {isLoggedIn ? (
            <>
              <Link href="/account" className="flex items-center gap-1">
                <UserIcon width={20} height={20} /> Account
              </Link>
              <Link href="/signout">Sign Out</Link>
            </>
          ) : (
            <div className="flex gap-1 items-center">
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
