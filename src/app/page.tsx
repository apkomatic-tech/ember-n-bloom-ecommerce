import { buttonVariants } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

const HomePage = async () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <h1 className="font-bold text-4xl">Ember &amp; Bloom</h1>
      <p>Home page</p>
      <Link href="/about" className={buttonVariants({ variant: 'default', size: 'lg' })}>
        About Us
      </Link>
    </div>
  );
};

export default HomePage;
