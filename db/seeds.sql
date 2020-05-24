-- schema;

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

INSERT INTO employee(first_name, last_name, role_id, manager_id) VALUES ("Florie", "Leehane", 2, null);
INSERT INTO employee(first_name, last_name, role_id, manager_id) VALUES ("Johnna", "Berkery", 2, null);
INSERT INTO employee(first_name, last_name, role_id, manager_id) VALUES ("Lazar", "Tolwood", 3, null);
INSERT INTO employee(first_name, last_name, role_id, manager_id) VALUES ("Leonidas", "Echallie", 3, 1);
INSERT INTO employee(first_name, last_name, role_id, manager_id) VALUES ("Modestine", "Boxen", 1, 2);
INSERT INTO employee(first_name, last_name, role_id, manager_id) VALUES ("Skell", "Coats", 1, 2);
INSERT INTO employee(first_name, last_name, role_id, manager_id) VALUES ("Aleen", "Oiller", 2, 3);
INSERT INTO employee(first_name, last_name, role_id, manager_id) VALUES ("Evvie", "Fulham", 4, 3);
INSERT INTO employee(first_name, last_name, role_id, manager_id) VALUES ("Carleen", "Ollis", 4, null);
