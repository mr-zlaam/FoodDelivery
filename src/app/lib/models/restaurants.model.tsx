import mongoose from "mongoose";

const restaurantModel = new mongoose.Schema({
  name: String,
});

export const restaurantsSchema =
  mongoose.models.restaurants || mongoose.model("restaurants", restaurantModel);
