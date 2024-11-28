const tableName = "users";

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up(knex) {
    await knex.schema.createTable(tableName, function (table) {
        table.uuid("uuid").defaultTo(knex.raw("gen_random_uuid()")).primary();
        table.integer("user_id").notNullable()
        table.string("otp_code").notNullable()
        table.timestamp("expires_at").notNullable().defaultTo(knex.raw("now() + interval '10 minutes'"));
        
    });
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function down(knex) {
    await knex.schema.dropTableIfExists(tableName);
}