import React from "react";
import { Todo } from "./model";
import "./styles.css";
import TodoCard from "./TodoCard";

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodosList = ({ todos, setTodos }: Props) => {
  return (
    <div className="todos-container">
      {todos.map((t) => (
        <TodoCard todo={t} todos={todos} setTodos={setTodos} key={t.id} />
      ))}
    </div>
  );
};

export default TodosList;
