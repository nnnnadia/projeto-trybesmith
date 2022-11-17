import IOrder from '../interfaces/IOrder';
import * as OrderModel from '../models/order.model';
import * as ProductModel from '../models/product.model';
import * as jwt from '../utils/jwt';

export async function findAll(): Promise<IOrder[]> {
  return OrderModel.findAll();
}

export async function create(tokenJWT: string, productsIds: number[]) {
  const { userId } = jwt.retrieveTokenData(tokenJWT);
  const orderId = await OrderModel.create(userId);
  await ProductModel.assignOrder(orderId, productsIds);
  return { userId, productsIds };
}
