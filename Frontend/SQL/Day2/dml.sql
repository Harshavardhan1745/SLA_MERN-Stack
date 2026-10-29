CREATE DATABASE employeedb ;
USE employeedb ;

CREATE TABLE emp (
emp_id int primary key auto_increment,
emp_name varchar(100),
emp_department varchar(100),
emp_salary int  
);