import React from "react";
import sampleProductImage from "@/images/tea-1.jpg";
import Image from "next/image";
import { Button } from "@/components/ui/button";

function ProductDetailPage({ params }: { params: { slug: string } }) {
  // TODO: product should be dynamic coming from db/cms/api
  const product = {
    name: "Classic English Breakfast",
    description:
      "A robust morning tea blend to jumpstart your day. Full-bodied with malty notes and a hint of citrus.",
    price: 12.99,
    type: "black",
    image: sampleProductImage,
  };
  return (
    <div className="grid gap-8 px-4 md:mt-16 md:grid-cols-2 md:gap-16 lg:gap-32 2xl:px-0">
      {/* Left column (image) */}
      <div>
        <Image src={product.image} alt={product.name} className="rounded-md" />
      </div>
      {/* Right column (details) */}
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl font-bold lg:text-3xl">{product.name}</h1>
        <p className="text-xl">${product.price}</p>
        <p className="text-black/60">{product.description}</p>
        <Button className="w-full md:w-1/2" variant={"secondary"}>
          Add To Cart
        </Button>
      </div>
    </div>
  );
}

export default ProductDetailPage;
