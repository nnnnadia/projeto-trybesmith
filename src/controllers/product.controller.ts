import { Request, Response } from 'express';
import * as ProductService from '../services/product.service';

export async function create(req: Request, res: Response): Promise<void> {
  const { name, amount } = req.body;
  const product = await ProductService.create(name, amount);
  res.status(201).json(product);
}

export async function findAll(_req: Request, res: Response): Promise<void> {
  const products = await ProductService.findAll();
  res.status(200).json(products);
}
