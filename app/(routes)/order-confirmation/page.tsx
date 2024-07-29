import Navbar from "@/components/shared/Navbar/Navbar";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

function OrderConfirmationPage() {
  return (
    <div className="space-y-6">
      <Navbar />
      <div className="p-6 mx-auto max-w-7xl">
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <h1 className="text-2xl font-semibold">
            Thank you very much for trusting us
          </h1>
          <p className="text-gray-700">
            In a few moments you will receive all the information through your
            email
          </p>
          <p className="text-gray-700">
            You can view all your reservations within your customer area
          </p>
          <Link href="/">
            <Button>Get back to the page</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default OrderConfirmationPage;
