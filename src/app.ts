import express from 'express';
import productRouter from './routers/product.route';

const app = express();

app.use(express.json());

app.use(productRouter);

export default app;
