import knex from "knex"

export default db = knex({
    client: "pg",
    connection: {
        host: "127.0.0.1",
        port: process.env.PG_PORT,
        user: process.env.PG_USER,
        password: process.env.PG_PASSWORD,
        database: process.env.PG_DATABASE,
    },
})
