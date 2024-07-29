import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";



export async function POST(req:Request) {
    try {
        const { userId} = auth();
        const values = await req.json();

        if(!userId) {
            return new NextResponse("Unauthorized", { status: 401})
        }

        const car = await db.car.create({
            data: {
                userId,
                ...values
            }
        });
        
        return NextResponse.json(car, { status: 201 })
    } catch (error) {
        console.log("[Car]",error);
        return new NextResponse("Internal Error", { status: 500})
    }
}