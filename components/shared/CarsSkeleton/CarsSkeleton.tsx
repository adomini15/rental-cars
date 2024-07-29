import { Skeleton } from "@/components/ui/skeleton";

function CarsSkeleton() {
  const numberItems = 8;

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      {Array(8)
        .fill(0)
        .map((_, index) => {
          return (
            <div key={index}>
              <Skeleton className="h-[200px] w-full rounded-xl" />
              <Skeleton className="h-4 w-[200px] mt-5" />
              <Skeleton className="h-4 w-[200px] mt-5" />
              <Skeleton className="h-4 w-[200px] mt-5" />
            </div>
          );
        })}
    </div>
  );
}

export default CarsSkeleton;
