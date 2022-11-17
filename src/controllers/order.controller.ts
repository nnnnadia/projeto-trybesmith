import { Request, Response } from 'express';
import * as OrderService from '../services/order.service';

export async function findAll(
  _req: Request,
  res: Response,
): Promise<void> {
  const orders = await OrderService.findAll();
  res.status(200).json(orders);
}

export async function create(
  req: Request,
  res: Response,
) {
  const { authorization } = req.headers;
  const { productsIds } = req.body;
  const order = await OrderService.create(authorization as string, productsIds);
  res.status(201).json(order);
}
