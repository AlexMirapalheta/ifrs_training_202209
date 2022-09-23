import { Router } from 'express';
import MenuController from '../app/controller/menu.controller';
import createValidation from '../app/validations/menu/createMenu.validate';

const router = Router();

router.post('/menu', createValidation, MenuController.create);
router.get('/menu', MenuController.consult);

export default router;
