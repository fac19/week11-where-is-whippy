# week11-where-is-whippy

An ice cream truck finder for all you choc-chip nuts out there

https://where-is-whippy.herokuapp.com/

## Dependencies Installed

- pg - Non-blocking postgres client for Node (API)
- dotenv - Allows private variables to be added (API)
- nodemon - Restarts the server automatically when you make a change to the code
- bcrypt - hashes the passwords
- jsonwebtoken - used to create a jwt for the users to sign in and out

### Dev Dependencies Installed

- Jest - Testing library (API)

## To install a new local database

psql
CREATE DATABASE (database_name);
\c (database_name);
CREATE USER (user_name) WITH PASSWORD (password);
GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO (user_name);
\include server-api/db/init.sql;

## Set up .env file

PG DATABASE=(database_name)
PGUSER=(user_name)
PGPASSWORD=(password)
