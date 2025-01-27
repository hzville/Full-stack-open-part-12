import { deleteTodo } from "../services/todoService";

const DoneInfoButtons = ({ todo, refreshTodos }) => {
  const onClickDelete = async (todo) => {
    await deleteTodo(todo);
    refreshTodos();
  };
  return (
    <>
      <span data-testid="done-text">This todo is done</span>
      <span>
        <button onClick={() => onClickDelete(todo)} data-testid="delete-button">
          Delete
        </button>
      </span>
    </>
  );
};

export default DoneInfoButtons;
