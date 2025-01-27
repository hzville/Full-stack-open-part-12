import axios from "../util/apiClient";

export const getAllTodos = async () => {
  return await axios.get("/todos");
};

export const addNewTodo = async (todo) => {
  return await axios.post("/todos", todo);
};

export const deleteTodo = async (todo) => {
  await axios.delete(`/todos/${todo._id}`);
};

export const completeTodo = async (todo) => {
  await axios.put(`/todos/${todo._id}`, {
    text: todo.text,
    done: true,
  });
};
