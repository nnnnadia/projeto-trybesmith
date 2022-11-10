import * as ProductModel from '../models/product.model';
import IProduct from '../interfaces/IProduct';

export async function create(name: string, amount: string): Promise<IProduct> {
  return ProductModel.create(name, amount);
}

export async function findAll(): Promise<IProduct[]> {
  return ProductModel.findAll();
}
