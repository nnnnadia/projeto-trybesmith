import ErrorWithStatusCode from '../errors/ErrorWithStatusCode';
import * as UserModel from '../models/user.model';
import * as jwt from '../utils/jwt';

export async function create(
  username: string,
  classe: string,
  level: number,
  password: string,
): Promise<string> {
  const id = await UserModel.create(username, classe, level, password);
  const token = jwt.createToken(id);
  return token;
}

export async function checkLogin(
  username: string,
  password: string,
): Promise<string> {
  const user = await UserModel.getUserByUsername(username);
  if (user && user.password === password) {
    const token = jwt.createToken(user.id);
    return token;
  }
  throw new ErrorWithStatusCode(401, 'Username or password invalid');
}
