import { IMenu, IMenuResponse } from "../interfaces/menu.interface";
import MenuRepository from "../repository/menu.repository";

class MenuService {
  async create(payload: IMenu): Promise<IMenuResponse> {
    const result: IMenuResponse = await MenuRepository.create(payload);
    return result;
  }

  async consult(): Promise<IMenuResponse[]> {
    const result: IMenuResponse[] = await MenuRepository.consult();
    return result;
  }
}

export default new MenuService();
