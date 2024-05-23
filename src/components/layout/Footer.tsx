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
                <li>
                  <Link href="/shop">Black teas</Link>
                </li>
                <li>
                  <Link href="/shop">Green teas</Link>
                </li>
                <li>
                  <Link href="/shop">Herbal teas</Link>
                </li>
              </ul>
            </div>
            {/* Column 2 */}
            <div className="flex flex-col gap-4">
              <div className="text-lg">Company</div>
              <ul className="flex flex-col gap-2 text-black/60">
                <li>
                  <Link href="/shop">About Us</Link>
                </li>
                <li>
                  <Link href="/shop">Contact</Link>
                </li>
                <li>
                  <Link href="/shop">Return Policy</Link>
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
