import { CATEGORY_LINKS } from "@/constants";
import {
  FacebookIcon,
  LinkedinIcon,
  TwitterIcon,
  YoutubeIcon,
} from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="mt-16 bg-stone-100 py-8 md:py-16">
      <div className="2xl::px-0 mx-auto max-w-screen-2xl px-4">
        <div className="flex flex-col justify-between gap-8 md:flex-row">
          {/* Left Column */}
          <div className="flex flex-col items-center justify-between gap-4 md:items-start md:gap-0">
            <div className="text-xl">Ember &amp; Bloom</div>
            <ul className="flex items-center gap-6">
              <li className="cursor-pointer">
                <FacebookIcon />
              </li>
              <li className="cursor-pointer">
                <LinkedinIcon />
              </li>
              <li className="cursor-pointer">
                <YoutubeIcon />
              </li>
              <li className="cursor-pointer">
                <TwitterIcon />
              </li>
            </ul>
          </div>
          {/* Right Column */}
          <div className="grid grid-cols-2 gap-16">
            {/* Column 1 */}
            <div className="flex flex-col gap-4">
              <div className="text-lg">Shop</div>
              <ul className="flex flex-col gap-2 text-black/60">
                {CATEGORY_LINKS.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} prefetch>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            {/* Column 2 */}
            <div className="flex flex-col gap-4">
              <div className="text-lg">Resources</div>
              <ul className="flex flex-col gap-2 text-black/60">
                <li>
                  <Link href="/about">About Us</Link>
                </li>
                <li>
                  <Link href="/contact">Contact</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
