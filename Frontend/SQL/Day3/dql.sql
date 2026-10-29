CREATE DATABASE Employeesdb ;
USE Employeesdb;

CREATE TABLE emp (
id INT ,
name varchar(100),
 department VARCHAR(50),
   salary INT,
   city VARCHAR(50)
);

INSERT INTO emp
VALUES
(101,'Sudhan','Developer',65000,'Chennai'),
(102,'Rahul','Tester',40000,'Madurai'),
(103,'Karthik','Developer',55000,'Chennai'),
(104,'Ajay','HR',35000,'Salem'),
(105,'Vijay','Manager',85000,'Coimbatore'),
(106,'Arun','Developer',60000,'Bangalore'),
(107,'Priya','Tester',45000,'Chennai'),
(108,'Divya','HR',30000,'Madurai'),
(109,'Surya','Developer',70000,'Salem'),
(110,'Anitha','Manager',90000,'Chennai');


SELECT * FROM emp ;

SELECT name,department,salary FROM emp ;

SELECT distinct city FROM emp ;

SELECT * FROM emp WHERE city = 'Chennai';

SELECT * FROM  emp WHERE salary < 60000 ;

SELECT * FROM  emp WHERE salary <= 45000;

SELECT * FROM  emp WHERE 'Developer' AND city = 'Chennai';

SELECT * FROM emp WHERE 'Madurai' OR 'Salem' ;

SELECT * FROM emp WHERE name  LIKE 'A%' ;
 
SELECT * FROM emp WHERE name LIKE '%a' ;

SELECT * FROM emp WHERE name LIKE  '%ya%' ;

SELECT *FROM emp WHERE 	salary BETWEEN 45000 AND 70000 ;

SELECT * FROM emp  order by salary DESC ;

SELECT * FROM emp LIMIT 5 ;