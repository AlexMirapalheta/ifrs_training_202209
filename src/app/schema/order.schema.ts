import mongoose, { Schema } from 'mongoose';
import { IOrder } from '../interfaces/order.interface';

const schema = new Schema<IOrder>({
    idMenu: { type: String, required: true },
    quantity: { type: Number, required: true },
    totalPrice: { type: Number, required: true },
    waitingTime: { type: Number, required: true },
    delivered: { type: Boolean, required: true },
});

const Order = mongoose.model<IOrder>('Order', schema);

export default Order;
