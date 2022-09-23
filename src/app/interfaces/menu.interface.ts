import { Types } from "mongoose";

export interface IMenu {
  nomePrato: string;
  valorUnitario: number;
  tempoPreparoUnitario: number;
}

export interface IMenuResponse extends IMenu {
  _id: Types.ObjectId;
  _v?: number;
}
