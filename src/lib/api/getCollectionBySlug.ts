"use server";

import { notFound } from "next/navigation";
import { DEFAULT_CATEGORY_ID } from "../constants";
import { wixStoreServer } from "../wixStoreServer";
import { cache } from "react";

const getCollectionBySlug = cache(async (slug: string) => {
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
});

export default getCollectionBySlug;
