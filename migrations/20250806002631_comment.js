/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
	return Promise.all([
		knex.schema.createTable("gauze__comment", function (table) {
			table.uuid("id", { useBinaryUuid: true, primaryKey: true }).primary().defaultTo(knex.fn.uuid());
			table.date("created_at").notNullable();
			table.date("updated_at").notNullable();
			table.date("deleted_at");

			table.string("author", 1024);
			table.string("body", 4096);

			table.index("created_at");
			table.index("updated_at");
			table.index("deleted_at");
			table.index("author");
			table.index("body");
		}),
	]);
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
	return Promise.all([knex.schema.dropTable("gauze__post")]);
};
