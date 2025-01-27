import { deleteTodo } from "../services/todoService";
import { completeTodo } from "../services/todoService";

const NotDoneInfoButtons = ({ todo, refreshTodos }) => {
  const onClickDelete = async (todo) => {
    await deleteTodo(todo);
    refreshTodos();
  };

  const onClickComplete = async (todo) => {
    await completeTodo(todo);
    refreshTodos();
  };
  return (
    <>
      <span data-testid="not-done-text">This todo is not done</span>
      <span>
        <button onClick={() => onClickDelete(todo)} data-testid="delete-button">
          Delete
        </button>
        <button
          onClick={() => onClickComplete(todo)}
          data-testid="set-done-button"
        >
          Set as done
        </button>
      </span>
    </>
  );
};

export default NotDoneInfoButtons;
