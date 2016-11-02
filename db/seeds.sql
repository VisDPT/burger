-- Inserting ToDo Items into the Table
USE not_Burgers_todo_db;
INSERT INTO ToDoList (toDoItem, completed) 
VALUES ("Go Shopping", false),
       ("Walk The Dog", false), 
       ("Do the Dishes", true);
       
SELECT * FROM not_Burgers_todo_db.ToDoList; 