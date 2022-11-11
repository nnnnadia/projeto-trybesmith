import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import * as jwt from '../utils/jwt';

export async function create(
  username: string,
  classe: string,
  level: number,
  password: string,
): Promise<string> {
  const [{ insertId }] = await connection.execute<ResultSetHeader>(
    'INSERT INTO `Trybesmith`.`Users`(`username`, `classe`, `level`, `password`)'
      + 'VALUE (?, ?, ?, ?)',
    [username, classe, level, password],
  );
  const token = jwt.createToken(insertId);
  return token;
}

export const temp = 'só pro linter não reclamar';
