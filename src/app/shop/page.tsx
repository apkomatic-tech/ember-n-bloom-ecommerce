import ProductList from "@/components/ProductList";
import ProductListSkeleton from "@/components/ProductListSkeleton";
import { wixStoreServer } from "@/lib/wixStoreServer";
import React, { Suspense } from "react";
import ProductCategoryBanner from "@/components/ProductCategoryBanner";
import { DEFAULT_CATEGORY_ID } from "@/lib/constants";
// @ts-ignore
async function ShopPage({ searchParams }) {
  const categoryIdFromQuery = searchParams.categoryid ?? DEFAULT_CATEGORY_ID;
  const store = await wixStoreServer();
  const collections = await store.collections
    .queryCollections()
    .eq("_id", categoryIdFromQuery)
    .find();

  const category = collections?.items[0] ?? null;
  const productCount = collections?.items[0]?.numberOfProducts ?? 0;
  const categoryId = category?._id || DEFAULT_CATEGORY_ID;
  const categoryName = category?.name || "All Products";
  const categoryImage = category?.media?.mainMedia?.image ?? null;
  const categoryImagePath = categoryImage?.url ?? null;
  const categoryImageWidth = categoryImage?.width ?? 1;
  const categoryImageHeight = categoryImage?.height ?? 1;

  return (
    <div className="mt-4 px-6 2xl:px-0">
      {categoryImage && categoryImagePath ? (
        <div className="mb-12">
          <ProductCategoryBanner
            categoryImageUrl={categoryImagePath}
            categoryImageWidth={categoryImageWidth}
            categoryImageHeight={categoryImageHeight}
            categoryName={categoryName}
          />
        </div>
      ) : (
        <h1 className="mb-6 text-2xl">{categoryName}</h1>
      )}

      <div className="mb-2 text-sm text-black/75">
        Number of products: {productCount}
      </div>

      <Suspense fallback={<ProductListSkeleton count={productCount} />}>
        <ProductList
          categoryId={categoryId}
          numberOfProductsToShow={productCount}
        />
      </Suspense>
    </div>
  );
}

export default ShopPage;
