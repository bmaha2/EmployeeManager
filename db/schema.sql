DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employee_db;
USE employee_db;

CREATE TABLE department (
    id INT(10) NOT NULL AUTO_INCREMENT,
    dept_name VARCHAR(30) NOT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE role(
    id INT(10) NOT NULL AUTO_INCREMENT,
    title VARCHAR(30),
    salary DECIMAL(30) NOT NULL,
    department_id INT(10) NOT NULL,
    PRIMARY KEY(id)
);
CREATE TABLE employee(
    id INT(10) NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT(10),
    manager_id INT(10),
    PRIMARY KEY(id)
);

ALTER TABLE `role` ADD FOREIGN KEY (department_id) REFERENCES `department` (`id`);
ALTER TABLE `employee` ADD FOREIGN KEY (role_id) REFERENCES `role` (`id`);
ALTER TABLE `employee` ADD FOREIGN KEY (manager_id) REFERENCES `employee` (`id`);
