import { Types } from 'mongoose';

export interface IOrderRequest {
    idCardapio: string;
    quantidade: number;
}

export interface IOrder extends IOrderRequest {
    valorTotal: number;
    tempoEspera: number;
    emAndamento: boolean;
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
    emAndamento: boolean;
}

export interface IOrderDelivery {
    id: string;
    update: IDelivery;
}
