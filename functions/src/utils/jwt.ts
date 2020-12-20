import jwt from "jsonwebtoken";
import { NextFunction, Response, Request } from "express";
import * as errors from "../errors/errors.json";

const jwtNoFound: object = JSON.parse(JSON.stringify(errors.jwtNoFound));
const jwtFailed: object = JSON.parse(JSON.stringify(errors.jwtFailed));

export const validateJwt = (
  req: Request,
  res: Response,
  next: NextFunction
): boolean => {
  const token = req.headers["x-access-token"];

  if (!token && !res.headersSent) {
    next(jwtNoFound);
    return false;
  } else if (token && !res.headersSent) {
    jwt.verify(token, "secretPassword", (err: any) => {
      if (err) {
        next(jwtFailed);
        return false;
      }
    });
  }
  return true;
};

export const generateJwt = (userId) =>
  jwt.sign({ userId: userId.toString() }, "secretPassword");
