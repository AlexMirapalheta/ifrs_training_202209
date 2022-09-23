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
        if (!consult) throw new Error('Pedido Inexistente');
        if (!consult.emAndamento) throw new Error('Pedido Já Entregue');
    }

    private async buildOrder(payload: IOrderRequest): Promise<IOrder> {
        const cardapio: IMenuResponse | null = await MenuRepository.consultById(payload.idCardapio);

        if (!cardapio) throw new Error('Cardapio Inexistente');

        const order: IOrder = {
            ...payload,
            valorTotal: payload.quantidade * cardapio!.valorUnitario,
            tempoEspera: payload.quantidade * cardapio!.tempoPreparoUnitario,
            emAndamento: true,
        };

        return order;
    }
}

export default new OrderService();
