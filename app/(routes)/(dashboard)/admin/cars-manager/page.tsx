import React from "react";
import AddCarButton from "./components/AddCarButton/AddCarButton";
import CarsList from "./components/CarsList/CarsList";
import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { isAdministrator } from "@/lib/isAdministrator";

async function CarsManagerPage() {
  const { userId } = auth();

  if (!userId || !isAdministrator(userId)) {
    return redirect("/");
  }

  const cars = await db.car.findMany({
    where: {
      userId,
    },
    orderBy: {
      createAt: "desc",
    },
  });

  return (
    <div className="space-y-4">
      <div className="flex justify-between">
        <h2 className="text-2xl font-bold">Manage your cars</h2>
        <AddCarButton />
      </div>

      <CarsList cars={cars} />
    </div>
  );
}

export default CarsManagerPage;
