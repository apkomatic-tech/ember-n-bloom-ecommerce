"use client";

import { OAuthStrategy, createClient } from "@wix/sdk";
import { products, collections } from "@wix/stores";
import { members } from "@wix/members";
import Cookies from "js-cookie";
import { createContext } from "react";

const refreshToken = JSON.parse(Cookies.get("refreshToken") || "{}");
const wixClient = createClient({
  modules: {
    products,
    collections,
    members,
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
