import React from "react";
import { CarsListProps } from "./CarsList.types";
import CarCard from "./CarCard/CarCard";

async function CarsList(props: CarsListProps) {
  const { cars } = props;
  return (
    <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
      {cars.map((car) => {
        return <CarCard car={car} key={car.id} />;
      })}
    </div>
  );
}

export default CarsList;
