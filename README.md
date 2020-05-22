# week11-where-is-whippy

An ice cream truck finder for all you choc-chip nuts out there

## Description

The project is split into two subfolders. `client-app/` is the React front end and `server-api` is the backend Express REST API.

## Deployment

The FE and BE are deployed on Heroku. The [FE is deployed here](https://where-is-whippy.herokuapp.com/). Please refer to the API endpoints section for guidance on CRUD functions.

## Set up Instructions

1. Clone this repo
2. Run npm i on your terminal to install dependencies in the

- client-app/
- server-api/
- Root folder (Only need to `npm i` here if deploying)

N.B `npm start` will start the server but for the FE and BE please make sure you use `npm start` in the client-app/ and server-api/ folders respectively.

### Set up database for backend

3. Enter postgres and set up a superuser for local database

```
CREATE USER myuser WITH PASSWORD 'mypassword';
ALTER USER myuser WITH SUPERUSER;
```

4. Set up local database

```
   CREATE DATABASE my_new_db WITH OWNER myuser;
   \c my_new_db;
   \i .../db/init.sql;
```

5. Create a .env file in the root folder with the following inside:

```
PGDATABASE=my_new_db
PGUSER=myuser
PGPASSWORD=mypassword
JWT_SECRET=mysecret
```

Spicy side note: If you hit the home `'/'` route on the BE server it will serve up the FE.

### REST API Endpoints
Can check these locally with Postman
### GET
- GET all vendors: `http://localhost:8080/vendors/`
- GET all customer coordinates:`http://localhost:8080/customers/coords`
- GET all vendor coordinates: `http://localhost:8080/vendors/coords`

### POST
- POST new customer coordinates: `http://localhost:8080/customers/coords`
- POST new vendor coordinates: `http://localhost:8080/vendors/coords`
- POST signup new vendor `http://localhost:8080/vendors/signup`
- POST login vendor `http://localhost:8080/vendors/login`

## Dependencies Installed

- pg - Non-blocking postgres client for Node (API)
- dotenv - Allows private variables to be added (API)
- nodemon - Restarts the server automatically when you make a change to the code
- bcrypt - hashes the passwords
- jsonwebtoken - used to create a jwt for the users to sign in and out

### Dev Dependencies Installed

- Jest - Testing library (API)
