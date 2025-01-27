import { render, screen } from "@testing-library/react";
import TodoItem from "../TodoItem";
import "@testing-library/jest-dom";
import { describe, expect, vitest } from "vitest";

describe("test todo item component", () => {
  test("renders content", () => {
    const todo = {
      text: "testing todo item",
      done: false,
    };
    const refreshTodos = vitest.fn();

    render(<TodoItem todo={todo} refreshTodos={refreshTodos} />);
    expect(screen.getByTestId("todo-text")).toHaveTextContent(
      "testing todo item"
    );
    expect(screen.getByTestId("not-done-text")).toHaveTextContent(
      "This todo is not done"
    );
    expect(screen.getByTestId("delete-button")).toBeInTheDocument();
    expect(screen.getByTestId("set-done-button")).toBeInTheDocument();
  });
});
