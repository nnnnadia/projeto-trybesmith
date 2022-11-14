import { NextFunction, Request, Response } from 'express';
import ErrorWithStatusCode from '../errors/ErrorWithStatusCode';
import productSchema from './validations/productSchema';

const productValidation = (req: Request, _res: Response, next: NextFunction) => {
  const { name, amount } = req.body;
  const { error } = productSchema.validate({ name, amount });
  if (error && error.details[0].type === 'any.required') {
    next(new ErrorWithStatusCode(400, error.message));
  } else if (error) {
    next(new ErrorWithStatusCode(422, error.message));
  }
  next();
};

export default productValidation;
