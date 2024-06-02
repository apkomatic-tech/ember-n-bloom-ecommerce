import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

import heroImage from "../images/tea-hero.jpg";
import ProductList from "@/components/ProductList";

const HomePage = async () => {
  return (
    <>
      {/*  Hero */}
      <div className="relative flex min-h-[50vh] w-full items-center justify-center md:min-h-[65vh]">
        <div className="absolute left-0 top-0 z-[2] h-full w-full bg-red-500/10 backdrop-brightness-50"></div>
        <Image
          src={heroImage}
          alt=""
          loading="lazy"
          className="absolute left-0 top-0 z-[1] block h-full w-full object-cover"
        />
        <div className="relative z-[3] flex flex-col items-center gap-6 px-4">
          <h1 className="text-center text-4xl font-bold text-white md:text-5xl lg:text-6xl">
            Steep Yourself in Serenity
          </h1>
          <p className="text-center text-xl text-white/80 md:w-3/4">
            {" "}
            Discover premium loose leaf teas for every mood and moment. Explore
            our collections and find your perfect cup.
          </p>
          <Button asChild size={"lg"}>
            <Link href="/shop">Shop Now</Link>
          </Button>
        </div>
      </div>
      {/*  Featured products */}
      <div className="mt-12 px-6 xl:mt-16 2xl:px-0">
        <h2 className="mb-6 text-2xl">Featured Products</h2>
        <ProductList
          categoryId="23973281-265c-669d-ee48-b6f566aea329"
          numberOfProductsToShow={4}
        />
      </div>
    </>
  );
};

export default HomePage;
