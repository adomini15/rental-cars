import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { db } from "@/lib/db";
import CarsList from "./components/CarsList/CarsList";

export default async function DashboardPage() {
  const { userId } = auth();

  if (!userId) {
    return redirect("/");
  }

  const cars = await db.car.findMany({
    where: {
      isPublish: true,
    },
    orderBy: {
      createAt: "desc",
    },
  });

  return (
    <div className="space-y-6">
      <div className="flex justify-between">
        <h2 className="text-2xl font-bold">List of cars</h2>
      </div>
      <CarsList cars={cars} />
    </div>
  );
}
