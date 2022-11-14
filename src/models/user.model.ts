import { ResultSetHeader, RowDataPacket } from 'mysql2';
import connection from './connection';
import * as jwt from '../utils/jwt';
import IUser from '../interfaces/IUser';
import DefaultError from '../errors/DefaultError';

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

export async function getUserByUsername(
  username: string,
): Promise<IUser | undefined> {
  try {
    const [[result]] = await connection.execute<(RowDataPacket & IUser)[]>(
      'SELECT * FROM `Trybesmith`.`Users` WHERE `username` = ?', [username]);
    return result;
  } catch (error) {
    throw new DefaultError('Internal error');
  }
}
