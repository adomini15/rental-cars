"use client";
import { FilterableListProps } from "./FilterableList.types";
import { useState, useEffect } from "react";
import { Car } from "@prisma/client";
import CarsList from "../CarsList/CarsList";
import { compare } from "@/utils/string";
import CarsFilters from "../CarsFilters/CarsFilters";
import {
  FilterParamsType,
  SetFiltersHandler,
} from "../CarsFilters/CarsFilters.type";

const defaultFilterValues: FilterParamsType = {
  engine: "",
  people: "",
  transmission: "",
  type: "",
};

function FilterableList(props: FilterableListProps) {
  const { cars } = props;
  const [filteredCars, setFilteredCars] = useState<Car[]>();
  const [filters, setFilters] = useState<FilterParamsType>(defaultFilterValues);

  useEffect(() => {
    let filtered = cars.filter((car) => {
      return (
        compare(car["transmission"], filters["transmission"]) &&
        compare(car["people"], filters["people"]) &&
        compare(car["type"], filters["type"]) &&
        compare(car["engine"], filters["engine"])
      );
    });

    setFilteredCars(filtered);
  }, [filters, cars]);

  const handleFilterChange: SetFiltersHandler = (
    filterName: keyof FilterParamsType,
    filterValue: string
  ) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterName]: filterValue,
    }));
  };

  const clearFilters = () => {
    setFilters(defaultFilterValues);
  };

  return (
    <div>
      <CarsFilters
        filters={filters}
        clearFilters={clearFilters}
        setFilters={handleFilterChange}
      />
      <CarsList cars={filteredCars} />
    </div>
  );
}

export default FilterableList;
