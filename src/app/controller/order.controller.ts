import { IDelivery, IOrderRequest, IOrderResponse } from 'app/interfaces/order.interface';
import OrderService from '../service/order.service';

class OrderController {
    async create(req, res): Promise<IOrderResponse | Error> {
        try {
            const payload: IOrderRequest = req.body;
            const result = await OrderService.create(payload);

            console.log('\nOrderController', 'create');
            console.log('Payload:', JSON.stringify(payload));
            console.log('Response:', JSON.stringify(result));

            return res.status(201).json(result);
        } catch (error) {
            console.error('\nOrderController', 'create');
            console.error('Error:', JSON.stringify(error));

            return res.status(500).json({ error });
        }
    }

    async consult(req, res): Promise<IOrderResponse[]> {
        try {
            const result = await OrderService.consult();

            console.log('\nOrderController', 'consult');
            console.log('Response', JSON.stringify(result));

            return res.status(200).json(result);
        } catch (error) {
            console.error('\nOrderController', 'consult');
            console.error(error);

            return res.status(500).json({ message: error.message });
        }
    }

    async update(req, res): Promise<IOrderResponse> {
        try {
            const id: string = req.params.id;
            const payload: IOrderRequest = req.body;
            const result: IOrderResponse | null = await OrderService.update({
                id,
                payload,
            });

            console.log('\nOrderController', 'update');
            console.log('Payload:', `{id: ${id}}`, JSON.stringify(payload));
            console.log('Response', JSON.stringify(result));

            return res.status(200).json(result);
        } catch (error) {
            console.error('\nOrderController', 'update');
            console.error(error);

            return res.status(500).json({ message: error.message });
        }
    }

    async delivery(req, res): Promise<IOrderResponse> {
        try {
            const id: string = req.params.id;
            const update: IDelivery = req.body;
            const result: IOrderResponse | null = await OrderService.delivery({
                id,
                update,
            });

            console.log('\nOrderController', 'delivery');
            console.log('Payload:', `{id: ${id}}`, JSON.stringify(update));
            console.log('Response', JSON.stringify(result));

            return res.status(200).json(result);
        } catch (error) {
            console.error('\nOrderController', 'delivery');
            console.error(error);

            return res.status(500).json({ message: error.message });
        }
    }

    async delete(req, res): Promise<IOrderResponse> {
        try {
            const id: string = req.params.id;
            const result: IOrderResponse | null = await OrderService.delete(id);

            console.log('\nOrderController', 'delete');
            console.log('Payload:', `{id: ${id}}`);
            console.log('Response', JSON.stringify(result));

            return res.status(200).json(result);
        } catch (error) {
            console.error('\nOrderController', 'consult');
            console.error(error);

            return res.status(500).json({ message: error.message });
        }
    }
}

export default new OrderController();
