import "dotenv/config"
import {DataSource, DataSourceOptions} from "typeorm"
import path from "path"

const dataSourceConfig = (): DataSourceOptions => {
    
    return{
        type: "postgres",
        url: "postgres://oseas:1234@localhost:",
        entities: [],
        migrations:[],
        logging: true
    }
}