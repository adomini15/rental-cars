import Navbar from "@/components/shared/Navbar/Navbar";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

function OrderErrorPage() {
  return (
    <div className="space-y-4">
      <Navbar />
      <div className="p-6 mx-auto max-w-7xl">
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <h1 className="text-2xl">Oops, An error occurred! Try again later</h1>
          <Link href="/">
            <Button>Get back to the page</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default OrderErrorPage;
