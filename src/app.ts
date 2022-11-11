import express from 'express';
import { productRouter, userRouter } from './routers';

const app = express();

app.use(express.json());

app.use(productRouter);
app.use(userRouter);

export default app;
