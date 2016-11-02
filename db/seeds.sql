-- Inserting ToDo Items into the Table
USE burgers_todo_db;
INSERT INTO burgersOrToDo (toDoItem, completed) 
VALUES ("Go Shopping", false),
       ("Walk The Dog", false), 
       ("Do the Dishes", true);
       
SELECT * FROM burgers_todo_db.burgersOrToDo; 