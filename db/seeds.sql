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
("Melvin","Barr",2,NULL),
("Randy","Kamal",3,NULL),
("Yasmin","Malik",4,NULL),
("Elvia","Vreal",5,1),
("Perla","Smith",6,2),
("Jean","Pasco",7,3),
("Mo", "Zanaty",8,4);




