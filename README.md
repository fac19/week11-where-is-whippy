![Travis](https://travis-ci.com/fac19/week11-where-is-whippy.svg?branch=master)

# week11-where-is-whippy :icecream: :truck: 

## Project overview

An app created to connect local ice cream vendors with customers. Where's Whippy was created to support local businesses and ice cream lovers alike.

## The team

- [Ina](https://github.com/itsina96) - DevOps / Developer :desktop_computer: 
- [Lizzy](https://github.com/lizzy-j) - User Experience / Developer 🖌️
- [Joe](https://github.com/joepock123) - Quality assurance / Developer :heavy_check_mark: 
- [Hettie](https://github.com/HettieM) - Scrum master / Developer :clipboard: 

## Tech Stack
![tech-stack](https://i.imgur.com/Iw9D8vT.png)

#### Dependencies
- pg - Non-blocking postgres client for Node (API)
- dotenv - Allows private variables to be added (API)
- nodemon - Restarts the server automatically when you make a change to the code
- bcrypt - Hashes the passwords
- jsonwebtoken - Used to create a jwt for the users to sign in and out
- Prettier - Ensures we all have same formatting as a team

#### Dev Dependencies

- Husky - Prevents bad code from being committed automatically

## 🗄️ Database schema

![database-schema](https://i.imgur.com/8sCeOdk.png)

## Features
What can we do?

- You can sign up as either a vendor or customer.
- As a vendor you will be able to generate a heatmap of customers that have signalled they want ice cream.
- As a customer you can signal you want ice cream. Then when generating the heatmap as a vendor that location should show.



## 🏁 Getting started
1. Clone this repo locally
2. Run `npm run gap` → this will npm i the three package.jsons in

- client-app/
- server-api/
- Root folder 

Make sure you do `npm start` in the client-app/ and server-api/ folders respectively when running the project.

### Database setup

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

---



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


---

## 📆 Project Timeline
### 🎨 Week 1: Design 
This week was spent identifying key design heuristics we wanted to incorporate into our prototype and conducting user research. See our [style guide](https://github.com/fac19/week11-where-is-whippy/issues/1) here for a full breakdown.

For an overview of the project's user stories, check out the [User stories](https://github.com/fac19/week11-where-is-whippy/issues/3) here

The initial prototype can be viewed here on [Figma](https://www.figma.com/file/f0sE0BrQhChujnQJwxKpAz/Ice-Cream?node-id=0%3A1)

![figma prototype](https://i.imgur.com/E0INPni.png)


Through our initial user research, we learnt that ice cream vendors are not keen to have their location shared constantly with customers, so would like to have full control of how visible they are on the map, and this impacted our final MVP design.



### 🔧 Week 2: First Build Sprint
By the end of the first build sprint, we had accomplished the following:
* Initial set up of PostgresQL database
* Set up Travis CI and Husky as part of initial setup
* Deployment of frontend and backend from a monorepo
* Finalized style guide
* Set up React router for for the front-end to serve different pages


### 🔨 Week 3: Second Build Sprint
By the end of the second build sprint, we were able to :
* Create the heatmap for ice cream vendors to view nearby customers who are interested in icecream
* Set up codecov to monitor test coverage on the project
* Add functionality for customers to let ice cream vendors know they would like ice cream
* Include geolocation api tracking for customers


### ⏳ Unmet goals
Unfortunately, there were a few features we were unable to incorporate into the MVP due to time constraints. These included:
* The map customers where they could see their nearest ice cream vendor
* The routes feature for vendors which allows them to upload, edit and store their routes
* Style the heatmap based on the prototype
* Add an emergency exit for users
* No authorization on the API's endpoints
* Minimal frontend tests

### 👨‍🏫 Key takeaways
* React router to serve different pages for diferent users
* Using React context to make state management more streamlined in your React app
* Implementing and customising Google Map and Geocoding APIs in React
* How to scope a MVP properly and prototype in Figma
* Most importantly, everyone loves icecream :icecream: 
