[![Netlify Status](https://api.netlify.com/api/v1/badges/0e9d253d-58de-49ca-8655-8be52752a91b/deploy-status)](https://app.netlify.com/sites/where-is-whippy/deploys)
![Travis](https://travis-ci.com/fac19/week11-where-is-whippy.svg?branch=master)

# week11-where-is-whippy :icecream:

An ice cream truck and customer finder for all you choc-chip nuts out there

## Description

The project is split into two subfolders. `client-app/` is the React front end and `server-api` is the backend Express REST API.

## Deployment

The FE and BE are deployed on Nelify and Heroku but there is no real functionality. Please code review locally to see the features and refer to the API endpoints section for guidance on CRUD functions.

## Features
What can we do?

- You can sign up as either a vendor or customer.
- As a vendor you will be able to generate a heatmap of customers that have signalled they want icecream.
- As a customer you can signal you want ice cream. Then when generating the heatmap as a vendor that location should show.

### Missing features
- Customers not able to see vendor locations on their map (sorry no ice cream today)
- Vendor heatmap currently showing all customer locations (instead of only in last 30 mintutes and between two dates)
- No authorization on the API's endpoints
- **No frontend tests.** Interested in which FE Jest tests you found useful.  

## ***CODE REVIEW***
1) Aware that currently none of the endpoint require authorization 
2) What is good practice to persist state incase the user refreshes? 
3) Can we stop of user navigating to places they shouldn't be e.g. customer going to FE /heatmap endpoint?
4) Our logic in the header for checking login in status and redirect seems quite messy. Is there a better way to do this?
5) What is this weird error? Think it is something to do with how we render our components and checking if user is logged in:

```
index.js:1 Warning: Cannot update a component (`AppContextProvider`) while rendering a different component (`Header`). To locate the bad setState() call inside `Header`, follow the stack trace as described in https://fb.me/setstate-in-render
    in Header (at App.js:22)
    in div (at App.js:21)
    in Router (created by BrowserRouter)
    in BrowserRouter (at App.js:20)
    in AppContextProvider (at App.js:19)
    in App (at src/index.js:6)
```

## Set up Instructions

1. Clone this repo
2. Run npm i on your terminal to install dependencies in the

- client-app/
- server-api/
- Root folder 

Make sure you use `npm start` in the client-app/ and server-api/ folders respectively when running the project.

### Set up database for backend

3. Enter postgres and set up a superuser for local database

```
CREATE USER myuser WITH PASSWORD 'mypassword';
ALTER USER myuser WITH SUPERUSER;
```

4. Set up local dev and testing database. The latter must be called student_project_test_db.

```
   CREATE DATABASE my_new_db WITH OWNER myuser;
   \c my_new_db;
   \i .../db/init.sql;
   CREATE DATABASE student_project_test_db WITH OWNER myuser;
   \c student_project_test_db;
   \i .../db/init.sql;
```

5. Create a .env file in the `server-api/` folder with the following inside:

```
PGDATABASE=my_new_db
PGUSER=myuser
PGPASSWORD=mypassword
JWT_SECRET=mysecret
```

Hopefuly the project should run!

### REST API Endpoints

Examples of body and example response can be found in the following Postman collection:

[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/49b550d2bcb9bb2c74a7)

### GET


- GET all customers: `http://localhost:8080/customers/`
- GET all customer coordinates:`http://localhost:8080/customers/coords`
- GET specific customer:`http://localhost:8080/customers/id:`
- GET all vendors: `http://localhost:8080/vendors/`
- GET all vendor coordinates: `http://localhost:8080/vendors/coords`
- GET specific vendor:`http://localhost:8080/vendors/id:`
- GET specific route by name:`http://localhost:8080/routes/:name:`

### POST
- POST signup new vendor `http://localhost:8080/vendors/signup`
- POST login vendor `http://localhost:8080/vendors/login`
- POST new vendor coordinates: `http://localhost:8080/vendors/coords`
- POST new route:`http://localhost:8080/routes`
- POST signup new customer `http://localhost:8080/customers/signup`
- POST login customer `http://localhost:8080/customers/login`
- POST new customer coordinates: `http://localhost:8080/customers/coords`

### Delete
- DELETE route:`http://localhost:8080/routes/:name`

## Dependencies Installed

- pg - Non-blocking postgres client for Node (API)
- dotenv - Allows private variables to be added (API)
- nodemon - Restarts the server automatically when you make a change to the code
- bcrypt - hashes the passwords
- jsonwebtoken - used to create a jwt for the users to sign in and out
- Styled components - for CSS

### Dev Dependencies Installed

- Jest - Testing library (API)
