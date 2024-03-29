import { IMenuResponse } from 'app/interfaces/menu.interface';
import { IOrder, IOrderDelivery, IOrderRequest, IOrderResponse, IOrderUpdate } from '../interfaces/order.interface';
import OrderRepository from '../repository/order.repository';
import MenuRepository from '../repository/menu.repository';

class OrderService {
    async create(payload: IOrderRequest): Promise<IOrderResponse> {
        const order: IOrder = await this.buildOrder(payload);
        const result: IOrderResponse = await OrderRepository.create(order);
        return result;
    }

    async consult(): Promise<IOrderResponse[]> {
        const result: IOrderResponse[] = await OrderRepository.consult();
        return result;
    }

    async update({ id, payload }: IOrderUpdate): Promise<IOrderResponse | null> {
        await this.checkOrder(id);

        const update: IOrder = await this.buildOrder(payload);
        const result = await OrderRepository.update({
            id,
            update,
        });

        return result;
    }

    async delivery({ id, update }: IOrderDelivery): Promise<IOrderResponse | null> {
        await this.checkOrder(id);
        const result: IOrderResponse | null = await OrderRepository.update({ id, update });
        return result;
    }

    async delete(id): Promise<IOrderResponse | null> {
        await this.checkOrder(id);
        const result: IOrderResponse | null = await OrderRepository.delete(id);
        return result;
    }

    private async checkOrder(id: string): Promise<void> {
        const consult: IOrderResponse | null = await OrderRepository.consultById(id);
        if (!consult) throw new Error('Non-existent Order');
        if (consult.delivered) throw new Error('Order Delivered');
    }

    private async buildOrder(payload: IOrderRequest): Promise<IOrder> {
        const menu: IMenuResponse | null = await MenuRepository.consultById(payload.idMenu);

        if (!menu) throw new Error('Non-existent Menu');

        const order: IOrder = {
            ...payload,
            totalPrice: payload.quantity * menu!.unitPrice,
            waitingTime: payload.quantity * menu!.unitPreparationTime,
            delivered: false,
        };

        return order;
    }
}

export default new OrderService();
