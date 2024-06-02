import Link from "next/link";
import Image from "next/image";
import { wixStoreServer } from "@/lib/wixStoreServer";
import { DEFAULT_CATEGORY_ID } from "@/lib/constants";
import { Badge } from "./ui/badge";

type ProductListProps = {
  categoryId?: string;
  numberOfProductsToShow?: number;
};

const PRODUCTS_PER_PAGE = 20;

export default async function ProductList({
  categoryId = DEFAULT_CATEGORY_ID, // all products by default
  numberOfProductsToShow = PRODUCTS_PER_PAGE,
}: ProductListProps) {
  const store = await wixStoreServer();
  const data = await store.products
    .queryProducts()
    .eq("collectionIds", categoryId)
    .limit(numberOfProductsToShow)
    .find();

  return (
    <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-4">
      {data.items.map((p) => {
        const imageUrl = p.media?.mainMedia?.image?.url ?? "";
        return (
          <Link
            href={`/shop/${p.slug}`}
            key={p._id}
            className="group flex flex-col gap-5"
          >
            <div className="relative h-60 overflow-hidden">
              {p.ribbon && (
                <Badge
                  variant={"default"}
                  className="absolute right-1 top-1 z-[1]"
                >
                  {p.ribbon}
                </Badge>
              )}
              <Image
                src={imageUrl}
                width={p.media?.mainMedia?.image?.width ?? 1}
                height={p.media?.mainMedia?.image?.height ?? 1}
                className="block aspect-auto h-full w-full transform rounded-md object-cover duration-300 group-hover:opacity-80"
                alt=""
              />
            </div>
            <div className="flex flex-col gap-2">
              <h3>{p.name}</h3>
              <p>{p.price?.formatted?.price}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
