import { ResultSetHeader, RowDataPacket } from 'mysql2';
import DefaultError from '../errors/DefaultError';
import IOrder from '../interfaces/IOrder';
import connection from './connection';

export async function findAll(): Promise<IOrder[]> {
  try {
    const [result] = await connection.execute<RowDataPacket[]>(
      'SELECT `o`.`id`, `o`.`userId`, JSON_ARRAYAGG(`p`.`id`) AS `productsIds`'
      + 'FROM `Trybesmith`.`Orders` AS `o`'
      + 'JOIN `Trybesmith`.`Products` AS `p`'
      + 'ON `o`.`id` = `p`.`orderId`'
      + 'GROUP BY `o`.`id`',
    );
    return result as IOrder[];
  } catch (error) {
    throw new DefaultError('Internal Error');
  }
}

export async function create(userId: number): Promise<number> {
  try {
    const [{ insertId }] = await connection.execute<ResultSetHeader>(
      'INSERT INTO `Trybesmith`.`Orders` (`userId`) VALUE (?)',
      [userId],
    );
    return insertId;
  } catch (error) {
    throw new DefaultError('Internal Error');
  }
}
