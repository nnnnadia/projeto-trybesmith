import { ResultSetHeader, RowDataPacket } from 'mysql2';
import IProduct from '../interfaces/IProduct';
import connection from './connection';

export async function create(name: string, amount: string): Promise<IProduct> {
  const [{ insertId }] = await connection.execute<ResultSetHeader>(
    'INSERT INTO `Trybesmith`.`Products`(`name`, `amount`)'
      + 'VALUE (?, ?)',
    [name, amount],
  );
  const newProduct = {
    id: insertId,
    name,
    amount,
  };
  return newProduct;
}

export async function findAll(): Promise<IProduct[]> {
  const [result] = await connection.execute<(IProduct & RowDataPacket)[]>(
    'SELECT * FROM `Trybesmith`.`Products`');
  return result;
}

export async function assignOrder(orderId: number, productsIds: number[]): Promise<void> {
  const whereString = productsIds.map((_number) => '`id` = ?')
    .join(' OR ');
  await connection.execute<ResultSetHeader>(
    `UPDATE \`Trybesmith\`.\`Products\` SET \`orderId\` = ? WHERE ${whereString}`,
    [orderId, ...productsIds],
  );
}
