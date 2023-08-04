import { Router } from 'express';
import OrderController from '../app/controller/order.controller';
import createValidation from '../app/validations/order/createOrder.validate';
import paramsValidation from '../app/validations/order/updateOrder.validate';
import deliveryValidation from '../app/validations/order/deliveryOrder.validate';

const router = Router();

router.post('/order', createValidation, OrderController.create);
router.get('/order', OrderController.consult);
router.put('/order/:id', paramsValidation, createValidation, OrderController.update);
router.patch('/order/:id', paramsValidation, deliveryValidation, OrderController.delivery);
router.delete('/order/:id', paramsValidation, OrderController.delete);

export default router;
