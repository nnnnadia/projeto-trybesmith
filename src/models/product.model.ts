import { ResultSetHeader } from 'mysql2';
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

export const temp = 'só pro linter não reclamar por enquanto';
