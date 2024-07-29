import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  CarsFiltersProps,
  FilterParamsType,
  SetFiltersHandler,
} from "./CarsFilters.type";
import { Trash } from "lucide-react";
import { Button } from "@/components/ui/button";

function CarsFilters(props: CarsFiltersProps) {
  const { filters, clearFilters, setFilters } = props;

  const handleFilter: SetFiltersHandler = (
    filterName: keyof FilterParamsType,
    filterValie: string
  ) => {
    setFilters(filterName, filterValie);
  };

  return (
    <div className="md:flex-row md:space-y-0 flex gap-5 space-y-2 flex-col mt-5 mb-8 ">
      <Select
        value={filters.type}
        onValueChange={(value) => handleFilter("type", value)}
      >
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Type of car" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Type of car</SelectLabel>
            <SelectItem value="sedan">Sedan</SelectItem>
            <SelectItem value="suv">Suv</SelectItem>
            <SelectItem value="coupe">Coupe</SelectItem>
            <SelectItem value="familiar">Familiar</SelectItem>
            <SelectItem value="luxe">Luxe</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>

      <Select
        value={filters.transmission}
        onValueChange={(value) => handleFilter("transmission", value)}
      >
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Gear shift" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Gear shift</SelectLabel>
            <SelectItem value="automatic">Automatic</SelectItem>
            <SelectItem value="manual">Manual</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>

      <Select
        value={filters.engine}
        onValueChange={(value) => handleFilter("engine", value)}
      >
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Type of engine" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Type of engin</SelectLabel>
            <SelectItem value="gasoil">Gasoil</SelectItem>
            <SelectItem value="diesel">Diesel</SelectItem>
            <SelectItem value="electric">Electric</SelectItem>
            <SelectItem value="hybrid">Hybrid</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>

      <Select
        value={filters.people}
        onValueChange={(value) => handleFilter("people", value)}
      >
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="People" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>People</SelectLabel>
            <SelectItem value="2">2</SelectItem>
            <SelectItem value="4">4</SelectItem>
            <SelectItem value="5">5</SelectItem>
            <SelectItem value="7">7</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>

      <Button onClick={clearFilters}>
        Remove filters <Trash className="h-4 w-4 ml-2" />
      </Button>
    </div>
  );
}

export default CarsFilters;
