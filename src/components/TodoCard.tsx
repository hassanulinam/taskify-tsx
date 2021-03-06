import React, { useEffect, useRef, useState } from "react";
import { Draggable } from "react-beautiful-dnd";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import { Todo } from "./model";
import "./styles.css";

type Props = {
  index: number;
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const TodoCard = ({ index, todo, todos, setTodos }: Props) => {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [todoText, setTodoText] = useState<string>(todo.todo);
  console.log(`isEditing: ${isEditing}`);

  const editInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    editInputRef.current?.focus();
  }, [isEditing]);

  const handleDone = (id: number) => {
    setTodos(todos.map((t) => (t.id === id ? { ...t, isDone: true } : t)));
  };

  const handleDelete = (id: number) => {
    setTodos(todos.filter((t) => t.id !== id));
  };

  const handleEditing = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    setTodos(todos.map((t) => (t.id === id ? { ...t, todo: todoText } : t)));
    setIsEditing(false);
  };

  return (
    <Draggable draggableId={todo.id.toString()} index={index}>
      {(provided) => (
        <form
          className="todo-card-container"
          onSubmit={(e) => handleEditing(e, todo.id)}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          {isEditing && !todo.isDone ? (
            <input
              ref={editInputRef}
              type="input"
              className="todo-card--text"
              value={todoText}
              onChange={(e) => setTodoText(e.target.value)}
            />
          ) : (
            <span className="todo-card--text">{todo.todo}</span>
          )}
          <div className="todo-card--icons-container">
            <span className="icon" onClick={() => setIsEditing(true)}>
              <AiFillEdit />
            </span>
            <span className="icon" onClick={() => handleDelete(todo.id)}>
              <AiFillDelete />
            </span>
            <span className="icon" onClick={() => handleDone(todo.id)}>
              <MdDone />
            </span>
          </div>
        </form>
      )}
    </Draggable>
  );
};

export default TodoCard;
