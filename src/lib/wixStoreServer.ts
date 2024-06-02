import { createClient, OAuthStrategy } from "@wix/sdk";
import { products, collections } from "@wix/stores";
import { cookies } from "next/headers";

export const wixStoreServer = async () => {
  const cookieStore = await cookies();
  const myWixClient = createClient({
    modules: { products, collections },
    auth: OAuthStrategy({
      clientId: process.env.NEXT_PUBLIC_WIX_CLIENT_ID!,
      tokens: JSON.parse(
        cookieStore.get("session")?.value ||
          '{"accessToken": {}, "refreshToken": {}}',
      ),
    }),
  });

  return myWixClient;
};
