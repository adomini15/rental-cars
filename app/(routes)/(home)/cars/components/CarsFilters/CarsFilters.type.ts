import { Car } from "@prisma/client";

export type FilterParamsType = Pick<
Car,
"type" | "transmission" | "engine" | "people"
>;

export type SetFiltersHandler = (filterName: keyof FilterParamsType, filterValue: string) => void;

export type CarsFiltersProps = {
    setFilters: SetFiltersHandler;
    clearFilters: () => void;
    filters: FilterParamsType
}