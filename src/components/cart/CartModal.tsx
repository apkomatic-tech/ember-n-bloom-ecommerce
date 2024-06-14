"use client";

import { CartContext } from "@/app/context/CartProvider";
import { Loader2, ShoppingCartIcon, Trash2Icon } from "lucide-react";
import { useContext } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { media } from "@wix/sdk";
import Image from "next/image";
import { useToast } from "../ui/use-toast";
import { Button } from "../ui/button";

export default function CartModal() {
  const { cart, isLoading, removeFromCart, redirectToCheckout } =
    useContext(CartContext);
  const cartItems = cart.lineItems || [];
  const itemsTotal =
    cartItems.reduce((total, item) => {
      total += item?.quantity || 0;
      return total;
    }, 0) || 0;
  const { toast } = useToast();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="relative" disabled={isLoading}>
        <ShoppingCartIcon />
        {itemsTotal > 0 && (
          <span className="text-whit absolute -right-1 -top-1 h-4 w-4 rounded-full bg-primary p-1 text-[10px] font-bold leading-none text-primary-foreground">
            {itemsTotal}
          </span>
        )}
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className={cartItems.length > 0 ? "sm:w-60 lg:w-80" : ""}
      >
        <DropdownMenuLabel className="text-base">
          Shopping Cart
        </DropdownMenuLabel>
        {cartItems.length === 0 && (
          <DropdownMenuLabel className="font-normal">
            Cart is empty.
          </DropdownMenuLabel>
        )}
        {cartItems.length > 0 && (
          <DropdownMenuGroup>
            <DropdownMenuSeparator />
            {cartItems.map((item) => {
              const {
                url: imageUrl,
                height: imageHeight,
                width: imageWidth,
                altText: imageAltText,
              } = media.getImageUrl(item.image!);
              return (
                <div key={item._id} className="p-2">
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex gap-2">
                      <Image
                        src={imageUrl}
                        width={imageWidth}
                        height={imageHeight}
                        className="h-16 w-16 rounded-md"
                        alt={imageAltText || ""}
                      />
                      <div className="flex flex-col gap-1">
                        <div className="text-sm">
                          {item?.productName?.original}
                        </div>
                        <div className="text-xs">
                          Quantity: {item?.quantity}
                        </div>
                        <div className="text-xs">
                          {item?.price?.formattedAmount}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-2">
                      <button
                        type="button"
                        className="text-xs"
                        disabled={isLoading}
                        onClick={async () => {
                          const removeItemId = item?._id as string;
                          await removeFromCart(removeItemId);
                          toast({
                            description: (
                              <div>
                                <span className="italic">
                                  {item.productName?.original}
                                </span>{" "}
                                was removed from your cart
                              </div>
                            ),
                          });
                        }}
                      >
                        <Trash2Icon size={20} className="text-red-600" />
                        <span className="sr-only">Remove item</span>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
            <DropdownMenuSeparator />
            <DropdownMenuLabel className="flex flex-col gap-1 text-base font-normal">
              <div className="flex justify-between">
                {/* @ts-ignore */}
                <div>Subtotal</div> <div>{cart.subtotal.formattedAmount}</div>
              </div>
              <div className="text-xs text-foreground/50">
                Shipping and taxes calculated at checkout.
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuLabel>
              <Button
                variant={"default"}
                className="w-full"
                onClick={redirectToCheckout}
                disabled={isLoading}
              >
                {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                Checkout
              </Button>
            </DropdownMenuLabel>
          </DropdownMenuGroup>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
