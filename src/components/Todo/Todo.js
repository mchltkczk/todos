import {
  StyledTodo,
  StyledTodoButton,
  StyledTodoDescription,
} from "./Todo.Style";
import { useEffect, useState } from "react";
import TodoDelete from "./TodoDelete";



const Todo = ({ todoProgress, todosRender }) => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/user/1`)
      .then((res) => res.json())
      .then((res) => setTodos(res));
  }, [todosRender]);

  const renderTodos = () =>
    todos.todos?.map((todo) => {
      if (
        (todoProgress && todoProgress === todo.progress) ||
        todoProgress === "all"
      ) {
        return (
          <>
            <StyledTodo key={todo.id} progress={todo.progress}>
              <StyledTodoButton>
                <input type="radio"></input>
              </StyledTodoButton>
              <StyledTodoDescription>
                <h3>{todo.title}</h3>
                <p>{todo.description}</p>
              </StyledTodoDescription>
              <StyledTodoButton>
                <TodoDelete del={todo} todos={todos.todos} setTodos={setTodos}/>
              </StyledTodoButton>
            </StyledTodo>
          </>
        );
      }
    });

  return <div>{renderTodos()}</div>;
};

export default Todo;
