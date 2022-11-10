import * as ProductModel from '../models/product.model';
import IProduct from '../interfaces/IProduct';

export async function create(name: string, amount: string): Promise<IProduct> {
  return ProductModel.create(name, amount);
}

export const temp = 'só pro linter não reclamar por enquanto';
