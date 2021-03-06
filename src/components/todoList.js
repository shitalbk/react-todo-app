import React from "react";

const todos = [
  "Finish cooking",
  "Buy groceries",
  "Clean the room",
  "Pay bills"
];

const Todo = props => (
  <li onClick={() => props.deleteTodo(props.todo)}>{props.todo}</li>
);
const TodoList = props => {
  return (
    <ul>
    {props.todos.map(todo => (
      <Todo todo={todo} key={todo} deleteTodo={props.deleteTodo} />
    ))}
    </ul>
      );
    }; 
export default TodoList;
