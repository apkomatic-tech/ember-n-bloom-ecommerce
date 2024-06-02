import type { Metadata } from "next";
import { Poppins as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { WixClientStoreProvider } from "./context/WixClientStoreProvider";

const fontSans = FontSans({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Ember & Bloom",
  description:
    "Premium loose leaf teas for every mood & moment. Explore our collections, discover brewing tips, and elevate your tea experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        <WixClientStoreProvider>
          <Navbar />
          <main className="mx-auto max-w-screen-2xl">{children}</main>
          <Footer />
        </WixClientStoreProvider>
      </body>
    </html>
  );
}
