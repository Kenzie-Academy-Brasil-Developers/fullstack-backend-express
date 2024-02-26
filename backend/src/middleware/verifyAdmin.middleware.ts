import 'dotenv/config'
import { NextFunction, Request, Response } from "express";
import AppError from "../errors/AppErrors.error";


export const verifyAdmin = (req: Request, res: Response, next: NextFunction): void => {
    const {admin} = res.locals.decoded
  
    if(!admin) throw new AppError('Insufficient permissions', 403)
  
    return next()
  }