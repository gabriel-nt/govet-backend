import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';

import ResetPasswordController from '../controllers/ResetPasswordController';

const passwordRouter = Router();
const resetPassword = new ResetPasswordController();

passwordRouter.post(
    '/reset',
    celebrate({
        [Segments.BODY]: {
            email: Joi.string().required(),
            password: Joi.string().required(),
            password_confirmation: Joi.string()
                .required()
                .valid(Joi.ref('password')),
        },
    }),
    resetPassword.create,
);

export default passwordRouter;
