import { ErrorRequestHandler, NextFunction, Request, Response } from 'express';
import DefaultError from '../errors/DefaultError';
import ErrorWithStatusCode from '../errors/ErrorWithStatusCode';

const errorHandler: ErrorRequestHandler = (
  err: ErrorWithStatusCode | DefaultError,
  _req: Request,
  res: Response,
  _next: NextFunction,
) => res.status(err.statusCode || 500).json({ message: err.message });

export default errorHandler;
