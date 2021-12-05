-- RUN THESE COMMAND LINES IN THIS ORDER IF ON WINDOWS - Anthony
sudo service postgresql start     
sudo su - postgres
psql

\conninfo -- Checks your connection information with PostgreSQL

CREATE DATABASE bcrypto; -- Don't run if you already have one locally
DROP TABLE IF EXISTS users; -- Don't run if you already have a users table;
CREATE EXTENSION IF NOT EXISTS "uuid-ossp"; -- Allows us to use uuid in postgresql

-- Creates User Table;
CREATE TABLE users( 
    user_id uuid DEFAULT 
    uuid_generate_v4(),
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    username VARCHAR(100) NOT NULL UNIQUE,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT Now(),
    PRIMARY KEY(user_id) 
);


