import { Request, Response, NextFunction } from 'express';
import Joi from 'joi';

const mongoIdLength: number = 24;
const quuantityMinimunValue = 1;

export default async (req: Request, res: Response, next: NextFunction) => {
    try {
        const schema = Joi.object({
            idCardapio: Joi.string().not().empty().length(mongoIdLength).required(),
            quantidade: Joi.number().min(quuantityMinimunValue).required(),
        });

        const { error } = await schema.validate(req.body, { abortEarly: true });
        if (error) throw error;
        return next();
    } catch (error) {
        return res.status(400).json(error);
    }
};
