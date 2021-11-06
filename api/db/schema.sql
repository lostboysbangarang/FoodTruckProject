-- DROP DATABASE IF EXISTS foodtruck;
CREATE DATABASE IF NOT EXISTS foodtruck;
USE foodtruck;
-- SET GLOBAL default_storage_engine = 'InnoDB';

CREATE TABLE IF NOT EXISTS Users (
    id INTEGER UNSIGNED auto_increment,
    username VARCHAR(666) NOT NULL UNIQUE,
    email VARCHAR(666) UNIQUE,
    password VARCHAR(666), 
    createdAt DATETIME NOT NULL,
    updatedAt DATETIME NOT NULL,
    PRIMARY KEY (id)
);

DROP TABLE IF EXISTS User_Trucks;
CREATE TABLE IF NOT EXISTS User_Trucks (
    id INTEGER UNSIGNED auto_increment,
    index_num INTEGER NOT NULL,
    yelp_name VARCHAR(666) NOT NULL UNIQUE,
    image_url VARCHAR(666) NOT NULL UNIQUE,
    alias VARCHAR(666) NOT NULL UNIQUE,
    is_closed VARCHAR(666) NOT NULL,
    display_phone VARCHAR(666) NOT NULL,
    address1 VARCHAR(666) NOT NULL UNIQUE,
    city VARCHAR(666) NOT NULL,
    yelp_state VARCHAR(666) NOT NULL,
    yelp_url VARCHAR(666) NOT NULL UNIQUE,
    checkbox BOOLEAN NULL,
    
    PRIMARY KEY (id)
);