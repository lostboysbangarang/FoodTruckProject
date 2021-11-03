DROP DATABASE IF EXISTS foodtruck;
CREATE DATABASE foodtruck;
USE foodtruck;

CREATE TABLE IF NOT EXISTS Users (
    id INTEGER UNSIGNED auto_increment,
    username VARCHAR(666) NOT NULL UNIQUE,
    email VARCHAR(666) UNIQUE,
    password VARCHAR(666), 
    createdAt DATETIME NOT NULL,
    updatedAt DATETIME NOT NULL,
    PRIMARY KEY (id)
)