import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

import teaImage from "../images/tea-hero.jpg";

const HomePage = async () => {
  return (
    <div className="relative flex min-h-[50vh] w-full items-center justify-center md:min-h-[65vh]">
      <div className="absolute left-0 top-0 z-[2] h-full w-full bg-red-500/10 backdrop-brightness-50"></div>
      <Image
        src={teaImage}
        alt=""
        loading="lazy"
        className="absolute left-0 top-0 z-[1] block h-full w-full object-cover"
      />
      <div className="relative z-[3] flex flex-col items-center gap-6 px-4">
        <h1 className="text-center text-4xl font-bold text-white">
          Steep Yourself in Serenity (with Ember &amp; Bloom)
        </h1>
        <p className="text-center text-xl text-white/80 md:w-3/4">
          {" "}
          Discover premium loose leaf teas for every mood & moment. Explore our
          collections and find your perfect cup.
        </p>
        <Button asChild size={"lg"}>
          <Link href="/shop">Shop Now</Link>
        </Button>
      </div>
    </div>
  );
};

export default HomePage;
