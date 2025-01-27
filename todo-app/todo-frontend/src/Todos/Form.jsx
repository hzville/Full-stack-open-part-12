import React, { useState } from "react";
import { addNewTodo } from "../services/todoService";

const TodoForm = ({ refreshTodos }) => {
  const [text, setText] = useState("");

  const onChange = ({ target }) => {
    setText(target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addNewTodo({ text });
    refreshTodos();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="text" value={text} onChange={onChange} />
      <button type="submit"> Submit </button>
    </form>
  );
};

export default TodoForm;
