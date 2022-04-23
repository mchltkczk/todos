import {
  StyledTodo,
  StyledTodoButton,
  StyledTodoDescription,
} from "./Todo.Style";
import { useEffect, useState } from "react";
import TodoDelete from "./TodoDelete";
import TodoProgressBtn from "./TodoProgressBtn";
import { FilteredTodosContext } from "../context/FilteredTodos";
import { useContext } from "react";

const Todo = ({ todoProgress, todosRender }) => {
  const [todos, setTodos] = useState([]);
  const { filterTodos } = useContext(FilteredTodosContext);

  useEffect(() => {
    fetch(`http://localhost:3000/user/1`)
      .then((res) => res.json())
      .then((res) => setTodos(res));
  }, [todosRender]);

  const renderTodos = () =>
    todos.todos?.map((todo) => {
      if (
        (filterTodos && filterTodos === todo.progress) ||
        filterTodos === "all"
      ) {
        return (
          <>
            <StyledTodo key={todo.id} progress={todo.progress}>
              <StyledTodoButton>
                <TodoProgressBtn
                  todo={todo}
                  todos={todos.todos}
                  progress={todo.progress}
                  setTodos={setTodos}
                />
              </StyledTodoButton>
              <StyledTodoDescription>
                <h3>{todo.title}</h3>
                <p>{todo.description}</p>
              </StyledTodoDescription>
              <StyledTodoButton>
                <TodoDelete
                  del={todo}
                  todos={todos.todos}
                  setTodos={setTodos}
                />
              </StyledTodoButton>
            </StyledTodo>
          </>
        );
      }
    });

  return <div>{renderTodos()}</div>;
};

export default Todo;
