import { create } from "zustand";
import { persist, createJSONStorage, devtools } from "zustand/middleware";
import { toast } from "@/components/ui/use-toast";
import { Car } from "@prisma/client";

interface LovedCarStoreState {
  lovedItems: Car[];
  addLoveItem: (data: Car) => void;
  removeLovedItem: (id: string) => void;
}

export const useLovedCars = create(
  devtools(
    persist<LovedCarStoreState>(
      (set, get): any => {
        return {
          addLoveItem: (data: Car) => {
            const currentLovedItems = get().lovedItems;
            const existingItem = currentLovedItems.find(
              (item) => item.id == data.id
            );

            if (existingItem) {
              return toast({
                title: "The car already exists in the list 💔",
              });
            }

            set({
              lovedItems: [...get().lovedItems, data],
            });

            toast({
              title: "The car added in the list 🚗",
            });
          },
          removeLovedItem: (id: string) => {
            set({
              lovedItems: get().lovedItems.filter((item) => item.id != id),
            });

            toast({
              title: "The car removed from the list",
            });
          },
          lovedItems: [],
        };
      },

      {
        name: "loved-cars-storage",
        storage: createJSONStorage(() => localStorage),
      }
    ),
    {
      enabled: process.env.NODE_ENV != "production",
    }
  )
);
