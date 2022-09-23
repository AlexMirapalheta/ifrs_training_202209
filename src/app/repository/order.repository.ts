import { IOrderResponse, IOrder } from '../interfaces/order.interface';
import OrderSchema from '../schema/order.schema';

class OrderRepository {
    async create(payload: IOrder): Promise<IOrderResponse> {
        return OrderSchema.create(payload);
    }

    async consult(): Promise<IOrderResponse[]> {
        return OrderSchema.find();
    }

    async consultById(id: string): Promise<IOrderResponse | null> {
        return OrderSchema.findById(id);
    }

    async update({ id, update }): Promise<IOrderResponse | null> {
        return OrderSchema.findByIdAndUpdate(id, update, { new: true });
    }

    async delete(id: string) {
        return OrderSchema.findByIdAndDelete(id);
    }
}

export default new OrderRepository();
