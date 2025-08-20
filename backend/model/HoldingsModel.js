
import mongoose from "mongoose";

const HoldingsSchema = new mongoose.Schema({
  name: { type: String, required: true },
  qty: { type: Number, required: true, min: 0 },
  avg: { type: Number, required: true, min: 0 },
  price: { type: Number, required: true, min: 0 },
  net: { type: Number, required: true }, // Changed from String to Number
  day: { type: Date, required: true }, // Changed from String to Date
});

const HoldingsModel = mongoose.model("holding", HoldingsSchema);

export default HoldingsModel;


