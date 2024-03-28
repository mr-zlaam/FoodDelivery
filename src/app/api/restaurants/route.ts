import { connectionStr } from "@/app/lib/db";
import { restaurantsSchema } from "@/app/lib/models/restaurants.model";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

// Function to establish database connection
async function connectToDatabase() {
  await mongoose.connect(connectionStr);
}

// GET handler
export async function GET() {
  try {
    await connectToDatabase();
    const data = await restaurantsSchema.find();
    console.log(data);
    return NextResponse.json({
      status: "200",
      message: "Database connected successfully.",
    });
  } catch (error) {
    console.error("Error connecting to the database:", error);
    return NextResponse.json({
      error: "Server: Something went wrong while connecting to the database",
      status: 500,
    });
  }
}

// POST handler
export async function POST(request: Request) {
  try {
    const payload = await request.json();
    await connectToDatabase();

    const existingRestaurant = await restaurantsSchema.findOne({
      email: payload.email,
    });

    if (existingRestaurant) {
      return NextResponse.json({
        success: false,
        message: "This restaurant is already registered.",
        status: 400,
      });
    }

    const restaurant = new restaurantsSchema(payload);
    const result = await restaurant.save();

    return NextResponse.json({
      status: "200",
      success: true,
      message: `New Restaurant has been added`,
      data: result,
    });
  } catch (error) {
    console.error("Request failed: Internal server error", error);
    return new Response(`Request failed: Internal server error`, {
      status: 500,
    });
  }
}
