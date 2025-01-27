import DoneInfoButtons from "./DoneInfoButtons";
import NotDoneInfoButtons from "./NotDoneInfoButtons";

const TodoItem = ({ todo, refreshTodos }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        maxWidth: "70%",
        margin: "auto",
      }}
    >
      <span data-testid="todo-text">{todo.text}</span>
      {todo.done ? (
        <DoneInfoButtons todo={todo} refreshTodos={refreshTodos} />
      ) : (
        <NotDoneInfoButtons todo={todo} refreshTodos={refreshTodos} />
      )}
    </div>
  );
};

export default TodoItem;
