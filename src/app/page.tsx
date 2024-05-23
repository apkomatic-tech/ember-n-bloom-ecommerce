import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

import teaImage from '../images/tea-hero.jpg';

const HomePage = async () => {
  return (
    <div className="relative w-full min-h-[50vh] md:min-h-[65vh] flex items-center justify-center">
      <div className="absolute top-0 left-0 w-full h-full backdrop-brightness-50 bg-red-500/10 z-[2]"></div>
      <Image src={teaImage} alt="" loading="lazy" className="absolute top-0 left-0 object-cover w-full h-full block z-[1]" />
      <div className="relative z-[3] flex flex-col items-center gap-6 px-4">
        <h1 className="text-white font-bold text-4xl text-center">Steep Yourself in Serenity (with Ember &amp; Bloom)</h1>
        <p className="text-white/80 text-xl text-center md:w-3/4"> Discover premium loose leaf teas for every mood & moment. Explore our collections and find your perfect cup.</p>
        <Button asChild size={'lg'}>
          <Link href="/shop">Shop Now</Link>
        </Button>
      </div>
    </div>
  );
};

export default HomePage;
