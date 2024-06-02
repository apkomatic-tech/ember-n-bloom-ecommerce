import Image from "next/image";

type ProductCategoryBannerTypes = {
  categoryName: string;
  categoryImageUrl: string;
  categoryImageWidth: number;
  categoryImageHeight: number;
};

export default function ProductCategoryBanner({
  categoryName,
  categoryImageUrl,
  categoryImageWidth,
  categoryImageHeight,
}: ProductCategoryBannerTypes) {
  return (
    <div className="relative flex min-h-[320px] w-full items-center justify-center rounded-md">
      <div className="absolute left-0 top-0 z-[2] h-full w-full rounded-md bg-red-500/10 backdrop-brightness-50"></div>
      <Image
        src={categoryImageUrl}
        width={categoryImageWidth}
        height={categoryImageHeight}
        alt=""
        loading="lazy"
        className="absolute left-0 top-0 z-[1] block h-full w-full rounded-md object-cover"
      />
      <div className="relative z-[3] flex flex-col items-center gap-6 px-4">
        <h1 className="text-center text-4xl font-bold text-white md:text-5xl lg:text-6xl">
          {categoryName}
        </h1>
      </div>
    </div>
  );
}
