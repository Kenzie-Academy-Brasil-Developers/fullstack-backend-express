import { Router } from "express";
import { clientRouter } from "./clients.router";
import { sessionRouter } from "./session.router";


export const routes: Router = Router()

routes.use('/clients', clientRouter)
routes.use("/login", sessionRouter);