import ProductList from "@/components/ProductList";
import ProductListSkeleton from "@/components/ProductListSkeleton";
import { wixStoreServer } from "@/lib/wixStoreServer";
import React, { Suspense } from "react";
import ProductCategoryBanner from "@/components/ProductCategoryBanner";
import { DEFAULT_CATEGORY_ID } from "@/lib/constants";
import { notFound } from "next/navigation";
// @ts-ignore

async function getCollection(slug: string) {
  try {
    const store = await wixStoreServer();

    if (slug !== "all") {
      return (await store.collections.getCollectionBySlug(slug)).collection;
    } else {
      return await store.collections.getCollection(DEFAULT_CATEGORY_ID);
    }
  } catch (error) {
    // @ts-ignore
    if (error.details?.applicationError?.code === 404) {
      notFound();
    }
  }
}

async function ShopPage({ params }: { params: { slug: string } }) {
  const collection = await getCollection(params.slug);
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

  // const category = collections?.items[0] ?? null;
  // const productCount = collections?.items[0]?.numberOfProducts ?? 0;
  // const categoryId = category?._id ?? DEFAULT_CATEGORY_ID;
  // const categoryName = category?.name ?? "";
  // const categoryImage = category?.media?.mainMedia?.image ?? null;
  // const categoryImagePath = categoryImage?.url ?? null;
  // const categoryImageWidth = categoryImage?.width ?? 1;
  // const categoryImageHeight = categoryImage?.height ?? 1;

  // if (!category) {
  //   notFound();
  // }

  // function getCategoryHeading() {
  //   if (categoryName && categoryImage && categoryImagePath) {
  //     return (
  //       <div className="mb-12">
  //         <ProductCategoryBanner
  //           categoryImageUrl={categoryImagePath}
  //           categoryImageWidth={categoryImageWidth}
  //           categoryImageHeight={categoryImageHeight}
  //           categoryName={categoryName}
  //         />
  //       </div>
  //     );
  //   } else if (categoryName) {
  //     return <h1 className="mb-6 text-2xl">{categoryName}</h1>;
  //   } else {
  //     return null;
  //   }
  // }

  // return (
  //   <div className="mt-4 px-6 2xl:px-0">
  //     {getCategoryHeading()}

  //     <Suspense fallback={<ProductListSkeleton count={productCount} />}>
  //       <ProductList
  //         categoryId={categoryId}
  //         numberOfProductsToShow={productCount}
  //       />
  //     </Suspense>
  //   </div>
  // );
}

export default ShopPage;
