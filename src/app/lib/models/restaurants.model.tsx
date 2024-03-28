import mongoose from "mongoose";

const restaurantModelSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  city: String,
  address: String,
  contact: Number,
});

export const restaurantsSchema =
  mongoose.models.restaurants ||
  mongoose.model("restaurantsSchema", restaurantModelSchema);
