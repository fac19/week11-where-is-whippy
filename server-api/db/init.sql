BEGIN;

    DROP TABLE IF EXISTS customers;
    DROP TABLE IF EXISTS vendors;
    DROP TABLE IF EXISTS customer_location;
    DROP TABLE IF EXISTS vendor_location;
    DROP TABLE IF EXISTS vendor_routes;

    CREATE TABLE customers
    (
        id SERIAL PRIMARY KEY,
        email VARCHAR(100) NOT NULL,
        password VARCHAR(200) NOT NULL,
        username VARCHAR(50) NOT NULL
    )

    CREATE TABLE vendors
    (
        id SERIAL PRIMARY KEY,
        email VARCHAR(100) NOT NULL,
        password VARCHAR(200) NOT NULL,
        username VARCHAR(50) NOT NULL
    )

    CREATE TABLE customer_location
    (
        id SERIAL PRIMARY KEY,
        FOREIGN KEY (customer_id) REFERENCES customers(id),
        latitude VARCHAR(20) NOT NULL,
        longitude VARCHAR(20) NOT NULL,
        temperature VARCHAR(20) NOT NULL,
        time TIMESTAMP
    )

    CREATE TABLE vendor_location
    (
        id SERIAL PRIMARY KEY,
        FOREIGN KEY (vendor_id) REFERENCES vendors(id),
        latitude VARCHAR(20) NOT NULL,
        longitude VARCHAR(20) NOT NULL,
        time TIMESTAMP
    )

    CREATE TABLE vendor_routes
    (
        id SERIAL PRIMARY KEY,
        FOREIGN KEY (vendor_id) REFERENCES vendors(id),
        name VARCHAR(250),
        stop_number INTEGER,
        time_from TIME(0),
        time_to TIME(0),
        address
    )

    COMMIT;
