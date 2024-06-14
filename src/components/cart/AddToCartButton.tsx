"use client";

import { useContext } from "react";
import { Button } from "../ui/button";
import { CartContext } from "@/app/context/CartProvider";
import { Loader2 } from "lucide-react";
import { useToast } from "../ui/use-toast";

type AddToCartButtonProps = {
  productId: string;
  productName: string;
};

export default function AddToCartButton({
  productId,
  productName,
}: AddToCartButtonProps) {
  const { addToCart, isAddingToCart } = useContext(CartContext);
  return (
    <Button
      className="w-full md:w-1/2"
      variant={"default"}
      disabled={isAddingToCart}
      onClick={async () => {
        await addToCart(productId, productName, 1);
      }}
    >
      {isAddingToCart ? (
        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
      ) : null}
      {isAddingToCart ? "Adding to cart..." : "Add to cart"}
    </Button>
  );
}
