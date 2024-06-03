import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-md flex-col justify-center gap-8 px-4 py-24 2xl:px-0">
      <h1 className="text-3xl font-bold">Page Not Found</h1>
      <p className="text-lg">
        We can{"'"}t find the page you are looking for. Maybe you misspelled the
        URL or the page has been removed or is temporarily unavailable.
      </p>
      <Button variant="default" size="lg" className="w-full md:w-1/2" asChild>
        <Link href="/">Go back Home</Link>
      </Button>
    </div>
  );
}
