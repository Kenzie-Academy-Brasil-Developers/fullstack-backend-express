import { Router } from "express";
import { verifyAdmin } from "../middleware/verifyAdmin.middleware";
import { validateBody } from "../middleware/verifyBody.middleware";
import { verifyPermissions } from "../middleware/verifyPerm.middleware";
import { verifyToken } from "../middleware/verifyToken.middleware";
import { createClientSchema, updateClientSchema } from "../schemas/clients.schema";
import { createClientController, deleteClientController, readAllClientsController, updateClientController } from "../controllers/clients.controller";
import { verifyClientExists } from "../middleware/verifyClientExists.middleware";

export const clientRouter: Router = Router()

clientRouter.post('/', validateBody(createClientSchema), createClientController)
clientRouter.get('/', readAllClientsController)
clientRouter.patch('/:id', validateBody(updateClientSchema), verifyToken, verifyClientExists, verifyPermissions, updateClientController)
clientRouter.delete('/:id', verifyToken, verifyClientExists, verifyPermissions, verifyAdmin, deleteClientController)