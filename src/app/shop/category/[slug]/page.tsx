import ProductList from "@/components/ProductList";
import ProductListSkeleton from "@/components/ProductListSkeleton";
import { wixStoreServer } from "@/lib/wixStoreServer";
import React, { Suspense } from "react";
import ProductCategoryBanner from "@/components/ProductCategoryBanner";
import { DEFAULT_CATEGORY_ID } from "@/lib/constants";
import { notFound } from "next/navigation";
import getCollectionBySlug from "@/lib/api/getCollectionBySlug";
// @ts-ignore

async function ShopPage({ params }: { params: { slug: string } }) {
  const collection = await getCollectionBySlug(params.slug);
  if (!collection) {
    notFound();
  }
  const { _id: id, name, numberOfProducts } = collection;

  function getCategoryHeading() {
    if (name && collection?.media?.mainMedia?.image) {
      const { url, width, height } = collection.media.mainMedia.image;
      const categoryImagePath = url;
      const categoryImageWidth = width;
      const categoryImageHeight = height;
      return (
        <div className="mb-12">
          <ProductCategoryBanner
            categoryImageUrl={categoryImagePath}
            categoryImageWidth={categoryImageWidth}
            categoryImageHeight={categoryImageHeight}
            categoryName={name || "All Products"}
          />
        </div>
      );
    } else if (name) {
      return <h1 className="mb-6 text-2xl">{name}</h1>;
    } else {
      return null;
    }
  }

  return (
    <div className="mt-4 px-6 2xl:px-0">
      {getCategoryHeading()}

      <Suspense fallback={<ProductListSkeleton count={numberOfProducts} />}>
        <ProductList
          categoryId={id || DEFAULT_CATEGORY_ID}
          numberOfProductsToShow={numberOfProducts}
        />
      </Suspense>
    </div>
  );
}

export default ShopPage;
