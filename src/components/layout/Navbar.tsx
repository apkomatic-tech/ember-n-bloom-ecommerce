'use client';
import Link from 'next/link';
import Menu from './Menu.mobile';

const Navbar = () => {
  return (
    <header className="relative h-20 px-4 md:px-16 lg:px-25">
      <div className="max-w-screen-2xl mx-auto py-4 h-full">
        <div className="flex justify-between items-center h-full">
          <Link href="/">
            <div className="tracking-wider">Ember &amp; Bloom</div>
          </Link>
          <div className="md:hidden">
            <Menu />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
