import 'dotenv/config'
import { NextFunction, Request, Response } from "express";
import AppError from "../errors/AppErrors.error";

export const verifyPermissions = (req: Request, res: Response, next: NextFunction): void => {
    const {id} = req.params
    const {sub, admin} = res.locals.decoded
  
    if(admin) return next()
  
    if(id !== sub) throw new AppError('Insufficient permissions', 409)
  
    return next()
  }