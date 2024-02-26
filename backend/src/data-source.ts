import "dotenv/config"
import path from "path"
import {DataSource, DataSourceOptions} from "typeorm"

const dataSourceConfig = (): DataSourceOptions => {
    const entitiesPath: string = path.join(__dirname, './entities/**.{ts,js}')
    const migrationsPath: string = path.join(__dirname, './migrations/**.{ts,js}')

    const database: string | undefined = process.env.DB_URL

    if(!database){
        throw new Error("Missing enviroment variable")
    }
    
    return{
        type: "postgres",
        url: database,
        entities: [entitiesPath],
        migrations:[migrationsPath],
        logging: true
    }
}

export const AppDataSource: DataSource = new DataSource(dataSourceConfig())