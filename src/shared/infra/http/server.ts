import 'reflect-metadata';
import 'dotenv/config';

import express, { NextFunction, Response, Request } from 'express';
import 'express-async-errors';
import cors from 'cors';
import { errors } from 'celebrate';

import AppError from '@shared/errors/AppError';
import routes from './routes';

import '@shared/container';
import '@shared/infra/typeorm';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.use(errors());

app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
    if (err instanceof AppError) {
        return response
            .status(err.statusCode)
            .json({ status: 'error', message: err.message });
    }

    console.error(err);

    return response
        .status(500)
        .json({ status: 'error', message: 'Internal server Error' });
});

app.listen(process.env.port ?? 3333, () => {
    console.log('🚀 Server started on Port 3333');
});
