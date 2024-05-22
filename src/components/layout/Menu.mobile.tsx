import { MenuIcon } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

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
        </div>
      )}
    </div>
  );
};
export default Menu;
