USE employee_tracker;

insert into department(department_name)values
('IT'),('Accounting'),('Sales'),('Marketing');

insert into roles(title,salary,deparment_id)
values('Manager',12323,1),('Manager',82173,2),
('Manager',8127,3), ('Manager', 8000,4),

('Intern',1233,1),('Intern',82173,2),
('Intern',2133,3), ('Intern', 8000,4);


insert into employee(first_name,last_name,role_id,manager_id)
values
("Henry","Goldaman",1,NULL),
("Melvin","Barr",1,NULL),
("Randy","Kamal",1,NULL),
("Yasmin","Malik",1,NULL),
("Elvia","Vreal",1,NULL),
("Perla","Smith",1,NULL),
("Jean","Pasco",1,NULL),




