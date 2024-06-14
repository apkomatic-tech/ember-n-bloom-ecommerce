"use client";

import { useContext } from "react";
import { Button } from "../ui/button";
import { CartContext } from "@/app/context/CartProvider";
import { Loader2 } from "lucide-react";
type AddToCartButtonProps = {
  // figure our type of Product (@wix sdk)
  productId: string;
};
export default function AddToCartButton({ productId }: AddToCartButtonProps) {
  const { addToCart, isAddingToCart } = useContext(CartContext);

  return (
    <Button
      className="w-full md:w-1/2"
      variant={"default"}
      disabled={isAddingToCart}
      onClick={async () => {
        addToCart(productId, 1);
      }}
    >
      {isAddingToCart ? (
        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
      ) : null}
      {isAddingToCart ? "Adding to cart..." : "Add to cart"}
    </Button>
  );
}
