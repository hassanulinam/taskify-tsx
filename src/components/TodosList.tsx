import { Droppable } from "react-beautiful-dnd";
import { Todo } from "./model";
import "./styles.css";
import TodoCard from "./TodoCard";

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  completedTodos: Todo[];
  setCompletedTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodosList = ({
  todos,
  setTodos,
  completedTodos,
  setCompletedTodos,
}: Props) => {
  return (
    <div className="todos-container">
      <Droppable droppableId="ACTIVE_TODOS">
        {(provided) => (
          <div
            className="tasks-section"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <span className="tasks-section--heading">Active Tasks</span>
            {todos.map((t, index) => (
              <TodoCard
                index={index}
                key={t.id}
                todo={t}
                todos={todos}
                setTodos={setTodos}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
      <Droppable droppableId="COMPLETED_TODOS">
        {(provided) => (
          <div
            className="tasks-section completed"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <span className="tasks-section--heading">Active Tasks</span>
            {completedTodos.map((t, index) => (
              <TodoCard
                index={index}
                key={t.id}
                todo={t}
                todos={completedTodos}
                setTodos={setCompletedTodos}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default TodosList;
