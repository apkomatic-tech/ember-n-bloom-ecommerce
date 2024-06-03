import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { wixStoreServer } from "@/lib/wixStoreServer";
import { Badge } from "@/components/ui/badge";
import { notFound } from "next/navigation";

async function getProductDetailsBySlug(slug: string) {
  const wixStore = await wixStoreServer();
  const product = await wixStore.products
    .queryProducts()
    .eq("slug", slug)
    .limit(1)
    .find();
  return product;
}

async function ProductDetailPage({ params }: { params: { slug: string } }) {
  const productData = await getProductDetailsBySlug(params.slug);
  const [product] = productData.items;

  // 404 if product doesn't exist
  if (!product) {
    notFound();
  }

  const { name, description, media, price, ribbons } = product;
  const productImageUrl = media?.mainMedia?.image?.url ?? "";
  const productImageWidth = media?.mainMedia?.image?.width ?? 0;
  const productImageHeight = media?.mainMedia?.image?.height ?? 0;
  const productPriceFormatted = price?.formatted?.price;

  return (
    <div className="mt-4 grid gap-8 px-4 md:grid-cols-2 md:gap-16 lg:gap-32 2xl:px-0">
      {/* Left column (image) */}
      <div>
        <Image
          src={productImageUrl}
          width={productImageWidth}
          height={productImageHeight}
          alt={product.name || ""}
          className="rounded-md"
        />
      </div>
      {/* Right column (details) */}
      <div className="flex flex-col gap-4">
        {ribbons && ribbons.length > 0 && (
          <div className="flex gap-2">
            {ribbons.map((ribbon) => (
              <Badge variant={"secondary"} key={ribbon.text}>
                {ribbon.text}
              </Badge>
            ))}
          </div>
        )}
        <h1 className="text-2xl font-bold lg:text-3xl">{name}</h1>
        <p className="text-xl">{productPriceFormatted}</p>
        {description && (
          <div
            className="text-black/60"
            dangerouslySetInnerHTML={{ __html: description }}
          ></div>
        )}
        <Button className="w-full md:w-1/2" variant={"default"}>
          Add To Cart
        </Button>
      </div>
    </div>
  );
}

export default ProductDetailPage;
