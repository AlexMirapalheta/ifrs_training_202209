import { Types } from 'mongoose';

export interface IMenu {
    foodName: string;
    unitPrice: number;
    unitPreparationTime: number;
}

export interface IMenuResponse extends IMenu {
    _id: Types.ObjectId;
    _v?: number;
}
