
CREATE DATABASE not_Burgers_todo_db; 
USE not_Burgers_todo_db;

-- Creating Table
CREATE TABLE burgers (
ID INTEGER(11) AUTO_INCREMENT NOT NULL,
task VARCHAR (200) NOT NULL,
completed BOOLEAN DEFAULT false,
date  TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
PRIMARY KEY (ID)
);


SELECT * FROM not_Burgers_todo_db.burgers;


