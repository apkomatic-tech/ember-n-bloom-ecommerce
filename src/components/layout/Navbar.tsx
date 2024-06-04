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
import { CATEGORY_LINKS } from "@/constants";

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
                      {CATEGORY_LINKS.map((link) => (
                        <Link
                          key={link.name}
                          href={link.href}
                          legacyBehavior
                          passHref
                        >
                          <NavigationMenuLink
                            className={navigationMenuTriggerStyle()}
                          >
                            {link.name}
                          </NavigationMenuLink>
                        </Link>
                      ))}
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
