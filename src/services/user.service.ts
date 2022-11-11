import * as UserModel from '../models/user.model';

export async function create(
  username: string,
  classe: string,
  level: number,
  password: string,
): Promise<string> {
  return UserModel.create(username, classe, level, password);
}

export const temp = 'só pro linter não reclamar';
