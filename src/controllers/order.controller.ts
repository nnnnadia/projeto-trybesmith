import { Request, Response } from 'express';
import OrderServiceFindAll from '../services/order.service';

export default async function findAll(
  _req: Request,
  res: Response,
): Promise<void> {
  const orders = await OrderServiceFindAll();
  res.status(200).json(orders);
}