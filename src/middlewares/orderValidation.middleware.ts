import { NextFunction, Request, Response } from 'express';
import Joi from 'joi';
import ErrorWithStatusCode from '../errors/ErrorWithStatusCode';
import orderSchema from './validations/orderSchema';

const getErrorMessage = (error: Joi.ValidationError) => {
  if (error.details[0].type === 'array.min') return '"productsIds" must include only numbers';
  return error.message;
};

const orderValidation = (req: Request, _res: Response, next: NextFunction) => {
  const { productsIds } = req.body;
  const { error } = orderSchema.validate({ productsIds });
  if (!error) next();
  if (error && error.details[0].type === 'any.required') {
    next(new ErrorWithStatusCode(400, getErrorMessage(error)));
  } else if (error) {
    next(new ErrorWithStatusCode(422, getErrorMessage(error)));
  }
};

export default orderValidation;
