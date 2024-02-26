import 'reflect-metadata'
import 'express-async-errors'
import express, {Application, json} from 'express'
import { handleErrors } from './middleware/handleErrors.middleware'
import { routes } from './routers'




export const app:Application = express()

app.use(json())

app.use('/', routes)

app.use(handleErrors)
