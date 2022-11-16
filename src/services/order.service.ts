import IOrder from '../interfaces/IOrder';
import OrderModelFindAll from '../models/order.model';

export default async function findAll(): Promise<IOrder[]> {
  return OrderModelFindAll();
}
