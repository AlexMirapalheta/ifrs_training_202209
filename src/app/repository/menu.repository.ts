import { IMenuResponse, IMenu } from '../interfaces/menu.interface';
import MenuSchema from '../schema/menu.schema';

class MenuRepository {
    async create(payload: IMenu): Promise<IMenuResponse> {
        return MenuSchema.create(payload);
    }

    async consult(): Promise<IMenuResponse[]> {
        return MenuSchema.find();
    }

    async consultById(id: string): Promise<IMenuResponse | null> {
        return MenuSchema.findById(id);
    }
}

export default new MenuRepository();
