import Knex from 'knex';

export async function up(knew: Knex){
    // Criar tabela
    return knew.schema.createTable('items', table => {
        table.increments('id').primary();
        table.string('image').notNullable();
        table.string('titulo').notNullable();
    });
}

export async function down(knex: Knex){
    // deletar tabela
    return knex.schema.dropTable('items');
}