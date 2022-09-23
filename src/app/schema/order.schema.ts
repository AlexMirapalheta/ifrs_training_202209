import mongoose, { Schema } from "mongoose";
import { IOrder } from "../interfaces/order.interface";

const schema = new Schema<IOrder>({
  idCardapio: { type: String, required: true },
  quantidade: { type: Number, required: true },
  valorTotal: { type: Number, required: true },
  tempoEspera: { type: Number, required: true },
  emAndamento: { type: Boolean, required: true },
});

const Order = mongoose.model<IOrder>("Order", schema);

export default Order;
