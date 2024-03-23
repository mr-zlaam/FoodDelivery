import { connectionStr } from "@/app/lib/db";
import { restaurantsSchema } from "@/app/lib/models/restaurants.model";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await mongoose.connect(connectionStr);
    const data = await restaurantsSchema.find();
    console.log(data);
    return NextResponse.json({
      status: "200",
      message: "Database connected successfully.",
    });
  } catch (error) {
    console.error("Error connecting to the database:", error);
    return NextResponse.json(
      {
        error: "Server:: something went wrong while connecting to the database",
        status: 500,
      },
      { status: 500 }
    );
  }
}
