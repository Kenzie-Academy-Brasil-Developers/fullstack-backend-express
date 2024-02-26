import { Router } from "express";
import { verifyAdmin } from "../middleware/verifyAdmin.middleware";
import { validateBody } from "../middleware/verifyBody.middleware";
import { verifyPermissions } from "../middleware/verifyPerm.middleware";
import { verifyToken } from "../middleware/verifyToken.middleware";
import { createContactSchema, updateContactSchema } from "../schemas/contacts.schema";
import { createContactController, deleteContactController, readAllContactController, updateContactController } from "../controllers/contacts.controller";
import { verifyContactExists } from "../middleware/verifyContactExists.middleware";

export const contactRouter: Router = Router()

contactRouter.post('/', verifyToken, validateBody(createContactSchema), createContactController)
contactRouter.get('/', verifyToken, readAllContactController)
contactRouter.patch('/:id', validateBody(updateContactSchema), verifyToken, verifyContactExists, verifyPermissions, updateContactController)
contactRouter.delete('/:id', verifyToken, verifyContactExists, verifyPermissions, verifyAdmin, deleteContactController) 