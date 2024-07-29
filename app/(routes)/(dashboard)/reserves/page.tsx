import { Button } from "@/components/ui/button";
import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";
import ReservesTable from "./components/ReservesTable/ReservesTable";

async function ReservesPage() {
  const { userId } = auth();

  if (!userId) {
    return redirect("/");
  }

  const orders = await db.order.findMany({
    where: {
      userId,
    },
    orderBy: {
      createAt: "desc",
    },
  });

  return (
    <div>
      <h1 className="mb-4 text-3xl">Reserves</h1>
      {orders.length === 0 ? (
        <div className="flex flex-col justify-center gap-4 items-center">
          <h2 className="text-xl">You don&apos;t have any order</h2>
          <p>Make your orders through the order page</p>
          <Link href="/">
            <Button>Cars List</Button>
          </Link>
        </div>
      ) : (
        <ReservesTable orders={orders} />
      )}
    </div>
  );
}

export default ReservesPage;
