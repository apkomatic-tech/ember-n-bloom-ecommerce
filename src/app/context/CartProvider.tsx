"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { WixClientContext } from "./WixClientStoreProvider";
import { cart } from "@wix/ecom";

// TODO: add context types

export type CartState = {
  cart: cart.Cart;
  getCart: () => void;
  addToCart: (productId: string, quantity?: number) => void;
  removeFromCart: (productId: string) => void;
  isLoading: boolean;
  isAddingToCart: boolean;
};

export const CartContext = createContext<CartState>({
  cart: {},
  getCart: async () => {},
  addToCart: async () => {},
  removeFromCart: async () => {},
  isLoading: true,
  isAddingToCart: false,
});

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const wixClient = useContext(WixClientContext);
  const [cart, setCart] = useState<cart.Cart>({});
  const [isLoading, setIsLoading] = useState(true);
  const [isAddingToCart, setIsAddingToCart] = useState(false);

  async function getCart() {
    setIsLoading(true);
    try {
      const response = await wixClient.currentCart.getCurrentCart();
      setCart(response);
    } catch (err: any) {
      console.error("get cart error", err.message);
    } finally {
      setIsLoading(false);
    }
  }

  async function addToCart(productId: string, quantity?: number) {
    try {
      setIsAddingToCart(true);
      const response = await wixClient.currentCart.addToCurrentCart({
        lineItems: [
          {
            catalogReference: {
              appId: process.env.NEXT_PUBLIC_WIX_APP_ID!,
              catalogItemId: productId,
            },
            quantity: quantity || 1,
          },
        ],
      });

      setCart(response.cart!);
    } catch (err: any) {
      console.error("add to cart error", err.message);
    } finally {
      setIsAddingToCart(false);
    }
  }

  async function removeFromCart(productId: string) {
    try {
      const response =
        await wixClient.currentCart.removeLineItemsFromCurrentCart([productId]);
      setCart(response.cart!);
    } catch (err: any) {
      console.error("remove from cart error", err.message);
    }
  }

  useEffect(() => {
    getCart();
  }, []);

  return (
    <CartContext.Provider
      value={{
        cart,
        getCart,
        addToCart,
        isLoading,
        isAddingToCart,
        removeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
