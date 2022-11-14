import { Request, Response } from 'express';
import * as UserService from '../services/user.service';

export async function create(req: Request, res: Response): Promise<void> {
  const { username, classe, level, password } = req.body;
  const token = await UserService.create(username, classe, level, password);
  res.status(201).json({ token });
}

export async function login(req: Request, res: Response): Promise<void> {
  const { username, password } = req.body;
  const token = await UserService.checkLogin(username, password);
  res.status(200).json({ token });
}
