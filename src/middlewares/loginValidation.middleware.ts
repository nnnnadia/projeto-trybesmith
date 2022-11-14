import { NextFunction, Request, Response } from 'express';
import ErrorWithStatusCode from '../errors/ErrorWithStatusCode';
import loginSchema from './validations/loginSchema';

const loginValidation = (
  req: Request,
  _res: Response,
  next: NextFunction,
) => {
  const { username, password } = req.body;
  const { error } = loginSchema.validate({ username, password });
  if (error) next(new ErrorWithStatusCode(400, error.message));
  next();
};

export default loginValidation;
