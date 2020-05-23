BEGIN;

    DROP TABLE IF EXISTS customers, vendors, customer_location, vendor_location, vendor_routes
    CASCADE;

CREATE TABLE customers
(
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(200) NOT NULL,
    username VARCHAR(50) NOT NULL UNIQUE,
    age VARCHAR(50) NOT NULL,
    gender VARCHAR(50) NOT NULL,
    icecream_flavour VARCHAR(50) NOT NULL
);

CREATE TABLE vendors
(
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL UNIQUE,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(200) NOT NULL,
    mobile VARCHAR(15) NOT NULL,
    company_name VARCHAR(50) NOT NULL,
    alcohol BOOLEAN NOT NULL,
    vegan_option BOOLEAN NOT NULL
);

CREATE TABLE customer_location
(
    id SERIAL PRIMARY KEY,
    customer_id INTEGER REFERENCES customers(id),
    latitude DECIMAL NOT NULL,
    longitude DECIMAL NOT NULL,
    temperature DECIMAL NOT NULL,
    time TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE vendor_location
(
    id SERIAL PRIMARY KEY,
    vendor_id INTEGER REFERENCES vendors(id),
    latitude DECIMAL NOT NULL,
    longitude DECIMAL NOT NULL,
    time TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE vendor_routes
(
    id SERIAL PRIMARY KEY,
    vendor_id INTEGER REFERENCES vendors(id),
    name VARCHAR(250),
    stop_number INTEGER,
    time_from TIME(0),
    time_to TIME(0),
    address VARCHAR(50)
);

INSERT INTO customers
    (name, email, password, username, age, gender, icecream_flavour)
VALUES
    ('Hettie', 'hettie@test.com', 'password', 'HettieMcC', 24, 'F', 'Caramel'),
    ('Jack', 'jack@test.com', 'password', 'JackAT', 20, 'M', 'Chocolate'),
    ('Sarah', 'sarah@test.com', 'password', 'SarahJBB', 29, 'F', 'Strawberry'),
    ('Bill', 'bill@test.com', 'password', 'CrazyEastender', 27, 'm', 'Vanilla'),
    ('Louise', 'louise@test.com', 'password', 'Louise', 19, 'F', 'Vanilla');


INSERT INTO customer_location
    (customer_id, latitude, longitude, temperature, time)
VALUES
    (1, 51.392460, -0.113350, 31, '2019-07-14 15:30:00.000'),
    (2, 51.5029429882, -0.08798631472, 26, '2019-06-19 13:15:27.000'),
    (3, 51.500729, -0.124625, 28, '2019-06-18 12:48:16.000'),
    (4, 51.565060, -0.097630, 27, '2019-07-14 15:24:09.000'),
    (5, 51.551720, -0.085610, 26.5, '2019-07-18 15:24:09.000');

INSERT INTO vendors
    (email, password, name, mobile, company_name, alcohol, vegan_option)
VALUES
    ('hettie@test.com', 'password', 'HettieMcC', 07466785553, 'Mr.Whippy', true, false),
    ('jack@test.com', 'password', 'JackAT', 07539468823, 'Licky', false, false),
    ('sarah@test.com', 'password', 'SarahJBB', 08799921043, 'Berties', true, true),
    ('bill@test.com', 'password', 'CrazyEastender', 04328364859, 'Softy', false, true),
    ('louise@test.com', 'password', 'Louise', 07455683049, '99 problems', true, false);


INSERT INTO vendor_location
    (vendor_id, latitude, longitude, time)
VALUES
    (1, 51.392460, -0.113350, '2019-07-14 15:30:00.000'),
    (2, 51.5029429882, -0.08798631472, '2019-06-19 13:15:27.000'),
    (3, 51.500729, -0.124625, '2019-06-18 12:48:16.000'),
    (4, 51.565060, -0.097630, '2019-07-14 15:24:09.000'),
    (5, 51.551720, -0.085610, '2019-07-18 15:24:09.000');


COMMIT;
