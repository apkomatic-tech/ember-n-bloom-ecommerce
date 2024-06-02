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
        <div className="absolute left-0 top-[80px] z-[10] flex h-[calc(100dvh-80px)] min-h-[400px] w-full flex-col items-center gap-6 bg-secondary pt-24 text-xl font-bold text-black/80">
          <Link href="/shop">All teas</Link>

          <Link
            href="/shop?categoryid=23973281-265c-669d-ee48-b6f566aea329"
            onClick={closeMenu}
          >
            Featured teas
          </Link>

          <Link
            href="/shop?categoryid=3875a38b-d9b8-cf21-dbed-88c7a77659f2"
            onClick={closeMenu}
          >
            Black teas
          </Link>

          <Link
            href="/shop?categoryid=1d2ba839-b053-9415-786a-c2dba43e6058"
            onClick={closeMenu}
          >
            Green teas
          </Link>

          <Link
            href="/shop?categoryid=0e06f4d7-76ee-3f12-8f94-939e1b2ea119"
            onClick={closeMenu}
          >
            Herbal teas
          </Link>
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
