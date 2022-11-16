import { RowDataPacket } from 'mysql2';
import IOrder from '../interfaces/IOrder';
import connection from './connection';

export default async function findAll(): Promise<IOrder[]> {
  const [result] = await connection.execute<RowDataPacket[]>(
    'SELECT `o`.`id`, `o`.`userId`, JSON_ARRAYAGG(`p`.`id`) AS `productsIds`'
    + 'FROM `Trybesmith`.`Orders` AS `o`'
    + 'JOIN `Trybesmith`.`Products` AS `p`'
    + 'ON `o`.`id` = `p`.`orderId`'
    + 'GROUP BY `o`.`id`',
  );
  return result as IOrder[];
}
