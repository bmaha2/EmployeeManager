DROP DATABASE IF EXISTS empoyeeDb;
-- Create a database called role_db --
CREATE DATABASE empoyeeDb;

-- Use role_db for the following statements --
USE empoyeeDb;

CREATE TABLE department (
    id INT(10) NOT NULL AUTO_INCREMENT,
    name VARCHAR(30) NOT NULL,
    PRIMARY KEY(id)
)

CREATE TABLE role(
    id INT(10) NOT NULL AUTO_INCREMENT,
    title VARCHAR(30),
    salary DECIMAL(30) NOT NULL,
    department_id INT(10) NOT NULL,
    PRIMARY KEY(id)
)
CREATE TABLE employee(
    id INT(10) NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT(10),
    manager_id INT(10),
    PRIMARY KEY(id)
)