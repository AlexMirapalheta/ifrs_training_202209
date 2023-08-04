import mongoose, { Schema } from 'mongoose';
import { IMenu } from '../interfaces/menu.interface';

const schema = new Schema<IMenu>({
    foodName: { type: String, required: true },
    unitPrice: { type: Number, required: true },
    unitPreparationTime: { type: Number, required: true },
});

const Menu = mongoose.model<IMenu>('Menu', schema);

export default Menu;
