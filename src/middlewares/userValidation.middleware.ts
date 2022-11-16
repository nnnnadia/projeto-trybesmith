import { NextFunction, Request, Response } from 'express';
import ErrorWithStatusCode from '../errors/ErrorWithStatusCode';
import userSchema from './validations/userSchema';

const userValidation = (req: Request, _res: Response, next: NextFunction) => {
  const { username, classe, level, password } = req.body;
  const { error } = userSchema.validate({ username, classe, level, password });
  if (error && error.details[0].type === 'any.required') {
    next(new ErrorWithStatusCode(400, error.message));
  } else if (error) {
    next(new ErrorWithStatusCode(422, error.message));
  }
  next();
};

export default userValidation;
