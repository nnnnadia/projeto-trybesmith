import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';

dotenv.config();

const secretKey = process.env.JWT_SECRET;
const jwtConfig = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

export const createToken = (userId) => jwt.sign({ userId }, secretKey, jwtConfig);

export const validateToken = (token) => jwt.verify(token, secretKey);

export const retrieveTokenData = (token) => jwt.decode(token);
