ok so:

if you want to test the backend by yourself create a table:

DROP TABLE if EXISTS users;

CREATE TABLE "users" (
  "id" SERIAL PRIMARY KEY,
  "name" varchar,
  "email" varchar,
  "password" varchar
);

select * from users;

to test if the Log-in worked with the data you POSTed

also in the server.js you have the data to create your own table

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: 'mrlzarate',
    port: 5432
});