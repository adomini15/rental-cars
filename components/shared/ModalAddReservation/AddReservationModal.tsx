import React, { useState } from "react";
import { AddReservationModalProps } from "./AddReservationModal.types";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogTrigger,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogCancel,
  AlertDialogAction,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Car } from "@prisma/client";
import CalendarSelector from "./CalendarSelector/CalendarSelector";
import { addDays } from "date-fns";
import { CalendarSelectorRange } from "./CalendarSelector/CalendarSelector.types";
import { DateRange } from "react-day-picker";
import axios from "axios";
import { toast } from "@/components/ui/use-toast";

function AddReservationModal(props: AddReservationModalProps) {
  const [selectedDate, setSelectedDate] = useState<CalendarSelectorRange>({
    from: new Date(),
    to: addDays(new Date(), 5),
  });
  const { car } = props;
  const onReserveCar = async (car: Car, dateSelected: DateRange) => {
    const res = await axios.post("/api/checkout", {
      carId: car.id,
      priceDay: car.priceDay,
      startDate: dateSelected.from,
      endDate: dateSelected.to,
      carName: car.name,
    });

    window.location = res.data.url;

    toast({
      title: "Car reserved ✌️",
    });
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline" className="w-full mt-3">
          Reserve vehicle
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            Select the dates on which you want to rent the car
          </AlertDialogTitle>
          <AlertDialogDescription>
            <CalendarSelector
              priceDay={car.priceDay}
              setSelectedDate={setSelectedDate}
            />
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={() => onReserveCar(car, selectedDate)}>
            Reserve vehicle
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default AddReservationModal;
