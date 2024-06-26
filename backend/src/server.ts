import 'dotenv/config'
import 'reflect-metadata'
import { app } from './app'
import { AppDataSource } from './data-source'

AppDataSource.initialize()
  .then((): void => {
    console.log('Database connected')

    const PORT: number = Number(process.env.PORT)
    app.listen(PORT, (): void => console.log(`App is running at port ${PORT}`))
  })
  .catch((error): void => console.log(error))