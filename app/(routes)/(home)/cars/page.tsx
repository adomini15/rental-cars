import Navbar from "@/components/shared/Navbar/Navbar";
import { db } from "@/lib/db";
import CarsHeader from "./components/CarsHeader/CarsHeader";
import FilterableList from "./components/FilterableList/FilterableList";

async function CarsPage() {
  const cars = await db.car.findMany({
    where: {
      isPublish: true,
    },
    orderBy: {
      createAt: "desc",
    },
  });

  return (
    <div>
      <Navbar />
      <div className="p-6 mx-auto max-w-7xl">
        <CarsHeader />
        <div>
          <FilterableList cars={cars} />
        </div>
      </div>
    </div>
  );
}

export default CarsPage;
