import { Request, Response } from "express";
import Error from "../models/Error";

export default (error: Error, req: Request, res: Response): void => {
  // if not response sent, send a response with any posible error
  if (!res.headersSent) {
    res.status(error.status).send({
      success: false,
      status: error.status,
      error: error.message || "Unknown error in the server",
    });
  }
};
