import { IMenu, IMenuResponse } from 'app/interfaces/menu.interface';
import MenuService from '../service/menu.service';

class MenuController {
    async create(req, res): Promise<IMenuResponse | Error> {
        try {
            const payload: IMenu = req.body;
            const result: IMenuResponse = await MenuService.create(payload);

            console.log('\nMenuController', 'create');
            console.log('Payload:', JSON.stringify(payload));
            console.log('Response:', JSON.stringify(result));

            return res.status(201).json(result);
        } catch (error) {
            console.error('\nMenuController', 'create');
            console.error('Error:', JSON.stringify(error));

            return res.status(500).json({ error });
        }
    }

    async consult(req, res): Promise<IMenuResponse[] | Error> {
        try {
            const result: IMenuResponse[] = await MenuService.consult();

            console.log('\nMenuController', 'consult');
            console.log('Response', JSON.stringify(result));

            return res.status(200).json(result);
        } catch (error) {
            console.error('\nMenuController', 'consult');
            console.error('Error:', JSON.stringify(error));

            return res.status(500).json({ error });
        }
    }
}

export default new MenuController();
