import React from "react";
import Link from "next/link";
import Image from "next/image";

import teaImage1 from "@/images/tea-1.jpg";
import teaImage2 from "@/images/tea-2.jpg";
import teaImage3 from "@/images/tea-3.jpg";
import teaImage4 from "@/images/tea-4.jpg";
import teaImage5 from "@/images/tea-5.jpg";
import teaImage6 from "@/images/tea-6.jpg";

async function ShopPage() {
  const products = [
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
  const searchParams = new URLSearchParams();
  const typeFilter = searchParams.get("type") ?? "all";
  console.log(searchParams);
  console.log(typeFilter);
  return (
    <div className="mt-12 px-6 xl:mt-16 2xl:px-0">
      <h2 className="mb-6 text-2xl">Shop</h2>
      <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-4">
        {products.map((p) => {
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
                {/* <p className="text-black/60">{p.description}</p> */}
                <p>${p.price}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default ShopPage;
