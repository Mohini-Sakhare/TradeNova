import mongoose from "mongoose";

const OrdersSchema = new mongoose.Schema({
  name: { type: String, required: true },
  qty: { type: Number, required: true, min: 1 },
  price: { type: Number, required: true, min: 0 },
  mode: { type: String, required: true }
});

const OrdersModel = mongoose.model("order", OrdersSchema);

export default OrdersModel ;

