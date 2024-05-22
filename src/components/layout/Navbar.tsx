'use client';
import Link from 'next/link';
import Menu from './Menu.mobile';
import AccountLinks from './AccountLinks';

const Navbar = () => {
  return (
    <header className="relative h-20 px-4 md:px-16 lg:px-25">
      <div className="max-w-screen-2xl mx-auto py-4 h-full">
        <div className="flex justify-between items-center h-full">
          <Link href="/">
            <div className="tracking-wider text-xl text-primary">Ember &amp; Bloom</div>
          </Link>
          <div className="hidden md:flex gap-16 items-center">
            <div className="md:hidden lg:flex gap-6 items-center">
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
