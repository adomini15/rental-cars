"use client";
import { useEffect, useState } from "react";
import { CalendarSelectorProps } from "./CalendarSelector.types";
import { addDays, format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DateRange } from "react-day-picker";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { calculateDaysBetween } from "@/utils/date";

function CalendarSelector(props: CalendarSelectorProps) {
  const { setSelectedDate, priceDay, className } = props;
  const [date, setDate] = useState<DateRange | undefined>({
    from: new Date(),
    to: addDays(new Date(), 5),
  });

  useEffect(() => {
    setSelectedDate({
      from: date?.from,
      to: date?.to,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [date]);

  const daysBetween =
    date?.from && date?.to ? calculateDaysBetween(date.from, date.to) : 0;

  return (
    <div className={cn("grid gap-2", className)}>
      {date?.from && date?.to && (
        <>
          <p className="mt-4 text-lg text-black">Total days {daysBetween}</p>
          <p className="mb-4 text-sm">
            Total price: {daysBetween * Number(priceDay)}€ (Tax included)
          </p>
        </>
      )}

      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant="outline"
            className={cn(
              "justify-start text-left font-normal",
              !date && "text-muted-foreground"
            )}
          >
            <CalendarIcon className="w-4 h-4 mr-2" />
            {date?.from ? (
              date?.to ? (
                <>
                  {`${format(date.from, "LLL dd, y")} - ${format(
                    date.to,
                    "LL dd, y"
                  )}`}
                </>
              ) : (
                <>{format(date.from, "LLL dd, y")}</>
              )
            ) : (
              <span>Pick a date</span>
            )}
          </Button>
        </PopoverTrigger>

        <PopoverContent className="m-auto p-8 w-full" align="start">
          <Calendar
            initialFocus
            mode="range"
            defaultMonth={date?.from}
            selected={date}
            onSelect={setDate}
            numberOfMonths={2}
          ></Calendar>
        </PopoverContent>
      </Popover>
    </div>
  );
}

export default CalendarSelector;
