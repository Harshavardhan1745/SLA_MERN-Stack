CREATE DATABASE studentdb;	
USE studentdb;

CREATE TABLE std (
 std_id int primary key auto_increment ,
 std_name varchar(100),
 std_age int ,
 std_email varchar(100),
 std_password varchar(20),
 created_by varchar(200) default "user",
 created_at date ,
 updated_by varchar(200) , 
 updated_at date
);

-- INSERT INTO std (std_name,std_age,std_email,std_password,created_by,created_at,updated_by,updated_at) VALUES ("Harsha",20,"iamharsha@gmail.com","harsha123456","user",curdate(),"user",curdate())

CREATE TABLE employees (

emp_id int primary key auto_increment ,
emp_name varchar(100),
department varchar(100),
salary int ,
city varchar(100)

);
DESC employees ;

ALTER TABLE employees ADD (
 emp_email varchar(100),
 emp_exp int
);

ALTER TABLE employees 
MODIFY salary BIGINT ;

ALTER TABLE employees 
RENAME COLUMN emp_name	TO employee_name ,
RENAME COLUMN  city TO location ;

-- INSERT INTO std (std_name,std_age,std_email,std_password,created_by,created_at,updated_by,updated_at) VALUES ("Harsha",20,"iamharsha@gmail.com","harsha123456","user",curdate(),"user",curdate());

INSERT INTO employees (emp_name,department,salary,city,emp_email,emp_exp) VALUES ("Harsha","Developer",40000,"Chennai","harsha@gmail.com",5);