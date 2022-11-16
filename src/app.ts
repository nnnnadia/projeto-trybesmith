import express from 'express';
import 'express-async-errors';
import errorHandler from './middlewares/errorHandler.middleware';
import { orderRouter, productRouter, userRouter } from './routers';

const app = express();

app.use(express.json());

app.use(productRouter);
app.use(userRouter);
app.use(orderRouter);

app.use(errorHandler);

export default app;
