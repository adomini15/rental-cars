import React from "react";
import LovedCarsList from "./LovedCarsList/LovedCarsList";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

function LovedCarsPage() {
  const { userId } = auth();

  if (!userId) {
    return redirect("/");
  }

  return (
    <div>
      <h1 className="text-2xl">Cars You Like</h1>
      <LovedCarsList />
    </div>
  );
}

export default LovedCarsPage;
