import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";
import {
  fleetBlock1,
  fleetBlock2,
  fleetCategories,
  FleetCategory,
} from "./Fleet.data";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface FleetBadgeProps extends FleetCategory {
  className?: string;
}

const FleetBadge = ({ active, name, className }: FleetBadgeProps) => {
  return (
    <div
      className={cn(
        className,
        "rounded-xl py-2 px-3",
        active ? "bg-black text-white" : "bg-slate-100"
      )}
    >
      {name}
    </div>
  );
};

function Fleet() {
  return (
    <div className="max-w-6xl mx-auto text-center py-12 lg:py-40 p-6">
      <h1 className="text-2xl lg:text-6xl font-bold">Our Vehicle Fleet</h1>
      <p className="text-lg mt-2 lg:mt-5 lg:text-xl text-center w-full mx-auto max-w-2xl mb-5 lg:mb-10">
        Don&apos;n deny yourself pleasure of driving the best premium cars from
        around the world here and now the world.
      </p>
      <div className="grid grid-cols-2 lg:grid-cols-6 gap-4 items-center justify-center mb-5 max-w-2xl mx-auto">
        {fleetCategories.map(({ active, name }) => (
          <FleetBadge key={name} name={name} active={active} />
        ))}
      </div>

      <div className="mb-10">
        <div className="grid grid-cols-3 gap-x-6 mb-6">
          {fleetBlock1.map(({ url, name }) => (
            <div key={name}>
              <Image
                src={`/images/cars/${url}`}
                alt={name}
                width={400}
                height={300}
                className="rounded-xl aspect-[3/2] object-cover"
              />
            </div>
          ))}
        </div>
        <div className="grid grid-cols-4 gap-x-6 max-w-5xl mx-auto">
          {fleetBlock2.map(({ url, name }) => (
            <div key={name}>
              <Image
                src={`/images/cars/${url}`}
                alt={name}
                width={400}
                height={300}
                className="rounded-xl aspect-[3/2] object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      <Link href="/dashboard">
        <Button className="rounded-xl p-6 text-lg mt-5" variant="outline">
          Show all models <MoveRight className="ml-2" />
        </Button>
      </Link>
    </div>
  );
}

export default Fleet;
