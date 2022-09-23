import { Request, Response, NextFunction } from 'express';
import Joi from 'joi';

const mongoIdLength: number = 24;

export default async (req: Request, res: Response, next: NextFunction) => {
    try {
        const schema = Joi.object({
            id: Joi.string().not().empty().length(mongoIdLength).required(),
        });

        const { error } = await schema.validate(req.params, { abortEarly: true });
        if (error) throw error;
        return next();
    } catch (error) {
        return res.status(400).send(error);
    }
};
