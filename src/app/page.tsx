import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

import teaImage from "../images/tea-hero.jpg";
import teaImage1 from "../images/tea-1.jpg";
import teaImage2 from "../images/tea-2.jpg";
import teaImage3 from "../images/tea-3.jpg";
import teaImage4 from "../images/tea-4.jpg";
import teaImage5 from "../images/tea-5.jpg";
import teaImage6 from "../images/tea-6.jpg";

const teaProducts = [
  // Black Tea
  {
    name: "Classic English Breakfast",
    description:
      "A robust morning tea blend to jumpstart your day. Full-bodied with malty notes and a hint of citrus.",
    price: 12.99,
    type: "black",
    image: teaImage1,
  },
  {
    name: "Earl Grey",
    description:
      "A sophisticated black tea with a distinctive bergamot orange aroma. Elegant and refreshing.",
    price: 14.99,
    type: "black",
    image: teaImage2,
  },
  // Green Tea
  {
    name: "Sencha",
    description:
      "A classic Japanese green tea known for its refreshing grassy aroma and taste. Delicate and invigorating.",
    price: 11.99,
    type: "green",
    image: teaImage3,
  },
  {
    name: "Dragonwell",
    description:
      "A delicate green tea from China with a subtle sweetness and a hint of nuttiness. Smooth and elegant.",
    price: 16.99,
    type: "green",
    image: teaImage4,
  },
  // Herbal Tea
  {
    name: "Peppermint",
    description:
      "A refreshing herbal tea with a minty aroma and taste. Cooling and aids digestion.",
    price: 9.99,
    type: "herbal",
    image: teaImage5,
  },
  {
    name: "Chamomile Dreams",
    description:
      "A soothing herbal tea with calming properties for relaxation and better sleep. Floral and calming aroma.",
    price: 10.99,
    type: "herbal",
    image: teaImage6,
  },
];

const HomePage = async () => {
  return (
    <>
      {/*  Hero */}
      <div className="relative flex min-h-[50vh] w-full items-center justify-center md:min-h-[65vh]">
        <div className="absolute left-0 top-0 z-[2] h-full w-full bg-red-500/10 backdrop-brightness-50"></div>
        <Image
          src={teaImage}
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
        <div className="grid grid-cols-2 gap-8 md:grid-cols-3">
          {teaProducts.map((p) => {
            return (
              <Link
                href={`/shop/${p.name.replaceAll(" ", "-").toLowerCase()}`}
                key={p.name}
                className="group flex flex-col gap-5"
              >
                <div className="h-60 overflow-hidden">
                  <Image
                    src={p.image}
                    className="block aspect-auto h-full w-full transform rounded-md object-cover duration-300 group-hover:opacity-80"
                    alt=""
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <h3>{p.name}</h3>
                  <p className="text-black/60">{p.description}</p>
                  <p>${p.price}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default HomePage;
