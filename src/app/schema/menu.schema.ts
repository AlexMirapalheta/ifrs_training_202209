import mongoose, { Schema } from "mongoose";
import { IMenu } from "../interfaces/menu.interface";

const schema = new Schema<IMenu>({
  nomePrato: { type: String, required: true },
  valorUnitario: { type: Number, required: true },
  tempoPreparoUnitario: { type: Number, required: true },
});

const Menu = mongoose.model<IMenu>("Menu", schema);

export default Menu;
