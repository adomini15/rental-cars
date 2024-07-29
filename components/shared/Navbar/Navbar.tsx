"use client";
import { Button } from "@/components/ui/button";
import { useLovedCars } from "@/hooks/use-loved-cars";
import { useAuth, UserButton } from "@clerk/nextjs";
import { Heart, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

function Navbar() {
  const { userId } = useAuth();
  const { lovedItems } = useLovedCars();

  return (
    <div className="max-w-5xl py-5 mx-auto">
      <div className="space-y-10 lg:space-y-0 justify-between lg:flex">
        <Link href="/" className="flex items-center justify-center gap-x-2">
          <Image src="/logo.svg" alt="TarreCars" width={50} height={50} />
          <span className="text-xl font-bold">TarreCars</span>
        </Link>

        <div className="flex items-center justify-center gap-x-7">
          <Link href="/cars">Cars List</Link>
          <Link href="/dashboard">Dashboard</Link>

          {userId ? (
            <>
              <Link href="/loved-cars" className="relative">
                <Heart
                  strokeWidth={1}
                  className={`${
                    lovedItems.length > 0 && "fill-black"
                  } cursor-pointer`}
                />
              </Link>
              <UserButton />
            </>
          ) : (
            <Link href="/sign-in" className="flex gap-x-3">
              <Button>
                Sign In <User className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
