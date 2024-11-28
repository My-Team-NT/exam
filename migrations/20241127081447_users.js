const tableName = "users";

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up(knex) {
    await knex.schema.createTable(tableName, function (table) {
        table.uuid("uuid").primary();
        table.string("firstname").notNullable();
        table.string("lastname").notNullable();
        table.string("email").notNullable().unique();
        table.string("password").notNullable();
        table.string("phone").notNullable();
        table.date("birth_date").notNullable();
        table
            .enum("role", ["user", "Admin", "SupperAdmin"])
            .notNullable()
            .defaultTo("user");
        table.boolean("is_active").defaultTo(false);
        table.timestamp("created_at").defaultTo(knex.fn.now());
        table.timestamp("updated_at").defaultTo(knex.fn.now());
    });
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function down(knex) {
    await knex.schema.dropTableIfExists(tableName);
}