import { boolean, integer, pgTable, serial, timestamp, varchar } from "drizzle-orm/pg-core";

export const User=pgTable('user', {
    id: serial('id').primaryKey(),
    email: varchar('email').unique().notNull(),
    password: varchar('password').notNull(),
    name: varchar('name').notNull(),
    role: varchar('role').notNull(),
})