import { Request, Response } from 'express';
import * as ProductService from '../services/product.service';

export async function create(req: Request, res: Response): Promise<void> {
  const { name, amount } = req.body;
  const product = await ProductService.create(name, amount);
  res.status(201).json(product);
}

export const temp = 'só pro linter não reclamar por enquanto';
