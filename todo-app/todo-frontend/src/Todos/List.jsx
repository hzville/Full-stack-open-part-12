import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, refreshTodos }) => {
  return (
    <>
      {todos
        .map((todo) => {
          return (
            <TodoItem todo={todo} key={todo.text} refreshTodos={refreshTodos} />
          );
        })
        .reduce((acc, cur) => [...acc, <hr />, cur], [])}
    </>
  );
};

export default TodoList;
