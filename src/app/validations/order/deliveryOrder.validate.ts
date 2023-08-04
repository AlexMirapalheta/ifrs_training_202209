import { Request, Response, NextFunction } from 'express';
import Joi from 'joi';

export default async (req: Request, res: Response, next: NextFunction) => {
    try {
        const schema = Joi.object({
            delivered: Joi.boolean().not().empty().required(),
        });

        const { error } = await schema.validate(req.body, { abortEarly: true });
        if (error) throw error;
        return next();
    } catch (error) {
        return res.status(400).json(error);
    }
};
