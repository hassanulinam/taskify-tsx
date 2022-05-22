import React, { useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import InputField from "./components/InputField";
import "./App.css";
import { Todo } from "./components/model";
import TodosList from "./components/TodosList";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todosList, setTodosList] = useState<Todo[]>([]);
  const [completedTodos, setCompletedTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent): void => {
    e.preventDefault();
    if (todo) {
      setTodosList([...todosList, { id: Date.now(), todo, isDone: false }]);
      setTodo("");
    }
  };
  console.log(todosList);

  return (
    <DragDropContext onDragEnd={() => {}}>
      <div className="App">
        <span className="heading">TASKIFY</span>
        <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
        <TodosList
          todos={todosList}
          setTodos={setTodosList}
          completedTodos={completedTodos}
          setCompletedTodos={setCompletedTodos}
        />
      </div>
    </DragDropContext>
  );
};

export default App;
