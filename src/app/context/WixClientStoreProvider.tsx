"use client";

import { createContext } from "react";
import { OAuthStrategy, createClient } from "@wix/sdk";
import { products, collections } from "@wix/stores";
import { members } from "@wix/members";
import { currentCart } from "@wix/ecom";
import Cookies from "js-cookie";

const refreshToken = JSON.parse(Cookies.get("refreshToken") || "{}");
const wixClient = createClient({
  modules: {
    products,
    collections,
    members,
    currentCart,
  },
  auth: OAuthStrategy({
    clientId: process.env.NEXT_PUBLIC_WIX_CLIENT_ID!,
    tokens: {
      accessToken: {
        value: "",
        expiresAt: 30,
      },
      refreshToken,
    },
  }),
});

export type WixClientType = typeof wixClient;
// export type CartItem = ReturnType<currentCart.Cart>;
export const WixClientContext = createContext<WixClientType>(wixClient);

export const WixClientStoreProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <WixClientContext.Provider value={wixClient}>
      {children}
    </WixClientContext.Provider>
  );
};
