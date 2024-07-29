import { db } from "@/lib/db";
import { auth, currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import ReservesTable from "./components/ReservesTable/ReservesTable";
import { isAdministrator } from "@/lib/isAdministrator";

async function ReservesAdminPage() {
  const { userId } = auth();
  const user = await currentUser();

  if (!userId || !user || !isAdministrator(userId)) {
    return redirect("/");
  }

  const orders = await db.order.findMany({
    orderBy: {
      createAt: "desc",
    },
  });

  return (
    <div>
      <h1 className="text-3xl mb-4">Reserves</h1>
      <ReservesTable orders={orders} />
    </div>
  );
}

export default ReservesAdminPage;
