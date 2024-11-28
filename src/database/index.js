import { config } from "dotenv"
config()

export const db = knex({
    client: "pg",
    connection: {
        user: process.env.PG_USER,
        password: process.env.PG_PASSWORD,
        host: process.env.PG_HOST,
        port: process.env.PG_PORT,
        database: process.env.PG_DATABASE,
    },
})
