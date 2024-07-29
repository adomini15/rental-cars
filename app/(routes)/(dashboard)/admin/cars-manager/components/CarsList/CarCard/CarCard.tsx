"use client";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import { Fuel, Gauge, Gem, Trash, Upload, Users, Wrench } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { CarCardProps } from "./CarCard.types";
import EditCarButton from "./EditCarButton/EditCarButton";
import axios from "axios";

function CarCard(props: CarCardProps) {
  const { car } = props;

  const router = useRouter();

  const handleDelete = async () => {
    try {
      await axios.delete(`/api/car/${car.id}`);
      toast({
        title: "Car deleted ❌",
      });
      router.refresh();
    } catch (error) {
      toast({
        title: "Something went wrong!",
        variant: "destructive",
      });
    }
  };

  const handlePublishCar = async (publish: boolean) => {
    try {
      await axios.patch(`/api/car/${car.id}`, { isPublish: publish });
      toast({
        title: publish ? `Car Published ✌️` : "Car unpublished ✌️",
      });

      router.refresh();
    } catch (error) {}
  };

  return (
    <div className="relative p-1 bg-white rounded-lg shadow-md hover:shadow-lg">
      <Image
        src={car.photo}
        alt={car.name}
        width={400}
        height={600}
        className="rounded-lg"
      />

      <p
        className={`rounded-t-md absolute top-0 right-0 w-full p-1 text-center text-white ${
          car.isPublish ? "bg-green-700" : "bg-red-700"
        }`}
      >
        {car.isPublish ? "Published" : "Not published"}
      </p>

      <div className="relative p-3">
        <div className="flex flex-col mb-3 gap-x-4">
          <p className="text-xl min-h-16 lg:min-h-fit">{car.name}</p>
          <p>{car.priceDay}€ / days</p>
        </div>

        <div className="grid md:grid-cols-2 gap-x-4">
          <p className="flex items-center">
            <Gem className="h-4 w-4 mr-2" strokeWidth={1} />
            {car.type}
          </p>

          <p className="flex items-center">
            <Wrench className="h-4 w-4 mr-2" strokeWidth={1} />
            {car.transmission}
          </p>

          <p className="flex items-center">
            <Users className="h-4 w-4 mr-2" strokeWidth={1} />
            {car.people}
          </p>

          <p className="flex items-center">
            <Fuel className="h-4 w-4 mr-2" strokeWidth={1} />
            {car.engine}
          </p>

          <p className="flex items-center">
            <Gauge className="h-4 w-4 mr-2" strokeWidth={1} />
            {car.cv} cv
          </p>
        </div>

        <div className="flex justify-between mt-3 gap-x-4">
          <Button variant="outline" onClick={handleDelete}>
            Delete
            <Trash className="h-4 w-4 ml-2" />
          </Button>

          <EditCarButton data={car} />
        </div>

        {car.isPublish ? (
          <Button
            className="w-full mt-3"
            variant="outline"
            onClick={() => handlePublishCar(false)}
          >
            Unpublish
            <Upload className="h-4 w-4 ml-2" />
          </Button>
        ) : (
          <Button
            className="w-full mt-3"
            onClick={() => handlePublishCar(true)}
          >
            Publish
            <Upload className="h-4 w-4 ml-2" />
          </Button>
        )}
      </div>
    </div>
  );
}

export default CarCard;
