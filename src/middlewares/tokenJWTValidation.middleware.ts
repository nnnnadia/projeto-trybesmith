import { NextFunction, Request, Response } from 'express';
import ErrorWithStatusCode from '../errors/ErrorWithStatusCode';
import * as jwt from '../utils/jwt';

export default function tokenJWTValidation(
  req: Request,
  _res: Response,
  next: NextFunction,
): void {
  const { authorization } = req.headers;
  if (!authorization) next(new ErrorWithStatusCode(401, 'Token not found'));
  try {
    jwt.validateToken(authorization as string);
    next();
  } catch (error) {
    next(new ErrorWithStatusCode(401, 'Invalid token'));
  }
}
