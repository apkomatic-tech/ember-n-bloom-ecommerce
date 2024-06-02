"use client";

import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import Menu from "./Menu.mobile";
import AccountLinks from "./AccountLinks";

const Navbar = () => {
  return (
    <header className="relative h-20 px-4 2xl:px-0">
      <div className="mx-auto h-full max-w-screen-2xl py-4">
        <div className="flex h-full items-center justify-between">
          <Link href="/">
            <div className="text-xl tracking-wider">Ember &amp; Bloom</div>
          </Link>
          <div className="hidden items-center gap-16 md:flex">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Shop</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid p-4">
                      <Link href="/shop" legacyBehavior passHref>
                        <NavigationMenuLink
                          className={navigationMenuTriggerStyle()}
                        >
                          All Teas
                        </NavigationMenuLink>
                      </Link>
                      <Link
                        href="/shop?categoryid=23973281-265c-669d-ee48-b6f566aea329"
                        legacyBehavior
                        passHref
                      >
                        <NavigationMenuLink
                          className={navigationMenuTriggerStyle()}
                        >
                          Featured Teas
                        </NavigationMenuLink>
                      </Link>
                      <Link
                        href="/shop?categoryid=3875a38b-d9b8-cf21-dbed-88c7a77659f2"
                        legacyBehavior
                        passHref
                      >
                        <NavigationMenuLink
                          className={navigationMenuTriggerStyle()}
                        >
                          Black Teas
                        </NavigationMenuLink>
                      </Link>
                      <Link
                        href="/shop?categoryid=1d2ba839-b053-9415-786a-c2dba43e6058"
                        legacyBehavior
                        passHref
                      >
                        <NavigationMenuLink
                          className={navigationMenuTriggerStyle()}
                        >
                          Green Teas
                        </NavigationMenuLink>
                      </Link>
                      <Link
                        href="/shop?categoryid=0e06f4d7-76ee-3f12-8f94-939e1b2ea119"
                        legacyBehavior
                        passHref
                      >
                        <NavigationMenuLink
                          className={navigationMenuTriggerStyle()}
                        >
                          Herbal Teas
                        </NavigationMenuLink>
                      </Link>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/about" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      About
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            <div>
              <AccountLinks />
            </div>
          </div>
          <div className="md:hidden">
            <Menu />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
