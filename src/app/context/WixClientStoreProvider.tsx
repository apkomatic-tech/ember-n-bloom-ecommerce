"use client";

import { OAuthStrategy, createClient } from "@wix/sdk";
import { products, collections } from "@wix/stores";
import Cookies from "js-cookie";
import { createContext } from "react";

const wixClient = createClient({
  modules: {
    // products,
    // collections,
  },
  auth: OAuthStrategy({
    clientId: process.env.NEXT_PUBLIC_WIX_CLIENT_ID!,
    tokens: JSON.parse(
      Cookies.get("session") || '{"accessToken": {}, "refreshToken": {}}',
    ),
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
