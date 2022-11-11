import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';

dotenv.config();

const secretKey = process.env.JWT_SECRET as string;
const jwtConfig = {
  expiresIn: '7d',
  algorithm: 'HS256',
} as object;

export const createToken = (userId: number) => jwt.sign({ userId }, secretKey, jwtConfig);

export const validateToken = (token: string) => jwt.verify(token, secretKey);

export const retrieveTokenData = (token: string) => jwt.decode(token);
