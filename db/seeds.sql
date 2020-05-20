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

INSERT INTO department(dept_name) VALUES ("Legal");
INSERT INTO department(dept_name) VALUES ("Engineering");
INSERT INTO department(dept_name) VALUES ("Accounting");
INSERT INTO department(dept_name) VALUES ("Sales");


INSERT INTO role(title, salary, department_id) VALUES ("Developer I",100000, 2);
INSERT INTO role(title, salary, department_id) VALUES ("Lead Engineer",90000, 2);
INSERT INTO role(title, salary, department_id) VALUES ("Accountant",80000, 3);
INSERT INTO role(title, salary, department_id) VALUES ("Accounting Assistant",60000, 3);
INSERT INTO role(title, salary, department_id) VALUES ("Legal Assistant", 70000, 1);
INSERT INTO role(title, salary, department_id) VALUES ("Lawyer",150000, 1);
INSERT INTO role(title, salary, department_id) VALUES ("Project Manager",120000, 2);
INSERT INTO role(title, salary, department_id) VALUES ("Data Coordiator",60000, 4);
INSERT INTO role(title, salary, department_id) VALUES ("VP Sales",100000, 4);

INSERT INTO employee(first_name, last_name, role_id, manager_id) VALUES ("Florie", "Leehane", 1, 2);
INSERT INTO employee(first_name, last_name, role_id, manager_id) VALUES ("Johnna", "Berkery", 2, 2);
INSERT INTO employee(first_name, last_name, role_id, manager_id) VALUES ("Lazar", "Tolwood", 3, 2);
INSERT INTO employee(first_name, last_name, role_id, manager_id) VALUES ("Leonidas", "Echallie", 4, 1);
INSERT INTO employee(first_name, last_name, role_id, manager_id) VALUES ("Modestine", "Boxen", 2, 1);
INSERT INTO employee(first_name, last_name, role_id, manager_id) VALUES ("Skell", "Coats", 1, default);
INSERT INTO employee(first_name, last_name, role_id, manager_id) VALUES ("Aleen", "Oiller", 2, 3);
INSERT INTO employee(first_name, last_name, role_id, manager_id) VALUES ("Evvie", "Fulham", 3, 3);
INSERT INTO employee(first_name, last_name, role_id, manager_id) VALUES ("Florie", "Leehane", 4, 3);
INSERT INTO employee(first_name, last_name, role_id, manager_id) VALUES ("Carleen", "Ollis", 2, default);
