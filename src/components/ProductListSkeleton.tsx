import { Skeleton } from "./ui/skeleton";

export default function ProductListSkeleton({ count }: { count: number }) {
  const elements = Array(count).fill(0);
  return (
    <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-4">
      {elements.map((_, index) => (
        <div key={index}>
          <Skeleton className="h-60" />
        </div>
      ))}
    </div>
  );
}
