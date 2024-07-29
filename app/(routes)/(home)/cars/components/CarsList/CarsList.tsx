"use client";
import { Button } from "@/components/ui/button";
import { Gem, Fuel, Heart, Users, Wrench, Gauge } from "lucide-react";
import Image from "next/image";
import { useLovedCars } from "@/hooks/use-loved-cars";
import { useAuth } from "@clerk/nextjs";
import { Car } from "@prisma/client";
import Link from "next/link";
import AddReservationModal from "@/components/shared/ModalAddReservation/AddReservationModal";
import { CarsListProps } from "./CarsList.types";
import { formatPrice } from "@/utils/formatPrice";
import CarsSkeleton from "@/components/shared/CarsSkeleton/CarsSkeleton";

function CarsList(props: CarsListProps) {
  const { cars } = props;
  const { userId } = useAuth();
  const { addLoveItem, lovedItems, removeLovedItem } = useLovedCars();

  if (!cars) {
    return <CarsSkeleton />;
  }

  if (cars.length == 0) {
    return <p>No vehicles have been found with these filters</p>;
  }

  return (
    <div className="grid  md:grid-cols-2 lg:grid-cols-4 gap-6">
      {cars.map((car: Car) => {
        const {
          priceDay,
          photo,
          name,
          type,
          transmission,
          people,
          engine,
          id,
          cv,
        } = car;
        const likedCar = lovedItems.some((item) => item.id == id);

        return (
          <div key={id} className="p-1 rounded-lg shadow-md hover:shadow-lg">
            <Image
              src={photo}
              alt={name}
              width={400}
              height={600}
              className="rounded-lg mx-auto"
            />
            <div className="p-3">
              <div className="flex flex-col mb-3 gap-x-4">
                <p className="text-xl min-h-16 lg:min-h-fit">{name}</p>
                <p>{formatPrice(Number(priceDay))}</p>
              </div>
              <p className="flex items-center">
                <Gem className="h-4 w-4 mr-2" strokeWidth={1} />
                {type}
              </p>
              <p className="flex items-center">
                <Wrench className="h-4 w-4 mr-2" strokeWidth={1} />
                {transmission}
              </p>
              <p className="flex items-center">
                <Users className="h-4 w-4 mr-2" strokeWidth={1} />
                {people}
              </p>
              <p className="flex items-center">
                <Fuel className="h-4 w-4 mr-2" strokeWidth={1} />
                {engine}
              </p>
              <p className="flex items-center">
                <Gauge className="h-4 w-4 mr-2" strokeWidth={1} />
                {cv} CV
              </p>

              {userId ? (
                <div className="flex items-center justify-center gap-x-3">
                  <AddReservationModal car={car} />
                  <Heart
                    className={`mt-2 cursor-pointer ${
                      likedCar && "fill-black"
                    }`}
                    onClick={
                      likedCar
                        ? () => removeLovedItem(id)
                        : () => addLoveItem(car)
                    }
                  />
                </div>
              ) : (
                <div className="w-full mt-2 text-center">
                  <Link href="/sign-in">
                    <Button variant="outline" className="w-full">
                      Log in to reserve
                    </Button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default CarsList;
