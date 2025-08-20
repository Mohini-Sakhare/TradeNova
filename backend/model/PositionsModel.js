import mongoose from "mongoose";

const PositionsSchema = new mongoose.Schema({
  product: { type: String, required: true },
  name: { type: String, required: true },
  qty: { type: Number, required: true, min: 0 },
  avg: { type: Number, required: true, min: 0 },
  price: { type: Number, required: true, min: 0 },
  net: { type: Number, required: true },
  day: { type: Date, required: true },
  isLoss: { type: Boolean, default: false },
});

const PositionsModel = mongoose.model("position", PositionsSchema);

export default  PositionsModel;
