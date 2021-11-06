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
    parent_type TEXT(666) NOT NULL,
    parent_class TEXT(666) NOT NULL,
    child_I_type TEXT(666) NOT NULL,
    child_I_class TEXT(666) NOT NULL,
    child_I_innerHTML VARCHAR(666) NOT NULL UNIQUE,
    child_II_type TEXT(666) NOT NULL,
    child_II_class TEXT(666) NOT NULL,
    child_II_child_type TEXT(666) NOT NULL,
    child_II_child_src VARCHAR(666) NOT NULL UNIQUE,
    child_II_child_alt TEXT(666) NOT NULL UNIQUE,
    child_III_type TEXT(666) NOT NULL,
    child_III_class TEXT(666) NOT NULL,
    child_III_child_type TEXT(666) NOT NULL,
    child_III_child_innerHTML VARCHAR(666) NOT NULL UNIQUE,
    child_IV_type TEXT(666) NOT NULL,
    child_IV_class TEXT(666) NOT NULL,
    child_IV_child_I_type TEXT(666) NOT NULL,
    child_IV_child_I_innerHTML VARCHAR(666) NOT NULL UNIQUE,
    child_IV_child_II_type TEXT(666) NOT NULL,
    child_IV_child_II_child_I_innerHTML VARCHAR(666) NOT NULL UNIQUE,
    child_IV_child_II_child_I_innerHTML_break TEXT(666) NOT NULL,
    child_IV_child_II_child_II_innerHTML VARCHAR(666) NOT NULL UNIQUE,
    child_IV_child_II_child_II_innerHTML_break TEXT(666) NOT NULL,
    child_IV_child_II_child_III_type TEXT(666) NOT NULL,
    child_IV_child_II_child_III_href VARCHAR(666) NOT NULL UNIQUE,
    child_IV_child_II_child_III_innerHTML TEXT(666) NOT NULL,
    child_V_type TEXT(666) NOT NULL,
    child_V_class TEXT(666) NOT NULL,
    child_V_child_I_type TEXT(666) NOT NULL,
    child_V_child_I_type_type TEXT(666) NOT NULL,
    child_V_child_II_type TEXT(666) NOT NULL,
    child_V_child_II_class TEXT(666) NOT NULL,
    PRIMARY KEY (id)
);