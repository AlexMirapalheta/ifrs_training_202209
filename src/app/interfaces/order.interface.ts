import { Types } from 'mongoose';

export interface IOrderRequest {
    idMenu: string;
    quantity: number;
}

export interface IOrder extends IOrderRequest {
    totalPrice: number;
    waitingTime: number;
    delivered: boolean;
}

export interface IOrderResponse extends IOrder {
    _id: Types.ObjectId;
    _v?: number;
}

export interface IOrderUpdate {
    id: string;
    payload: IOrderRequest;
}

export interface IDelivery {
    delivered: boolean;
}

export interface IOrderDelivery {
    id: string;
    update: IDelivery;
}
