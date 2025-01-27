import { useEffect, useState } from "react";
import { getAllTodos } from "../services/todoService";
import List from "./List";
import Form from "./Form";

const TodoView = () => {
  const [todos, setTodos] = useState([]);

  const refreshTodos = async () => {
    const { data } = await getAllTodos();
    setTodos(data);
  };

  useEffect(() => {
    refreshTodos();
  }, []);

  return (
    <>
      <h1>Todos</h1>
      <Form refreshTodos={refreshTodos} />
      <List todos={todos} refreshTodos={refreshTodos} />
    </>
  );
};

export default TodoView;
