import { ResultSetHeader, RowDataPacket } from 'mysql2';
import IProduct from '../interfaces/IProduct';
import connection from './connection';

export async function create(name: string, amount: string) {
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
