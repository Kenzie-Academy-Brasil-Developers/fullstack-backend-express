import { Router } from "express";
import { sessionLoginController } from "../controllers/session.controller";

export const sessionRouter: Router = Router();

sessionRouter.post("/", sessionLoginController);
