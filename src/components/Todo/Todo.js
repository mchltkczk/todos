import { StyledTodo, StyledTodoButton, StyledTodoDescription } from "./Todo.Style";
import { useEffect, useState } from 'react';
const Todo = () => {

  const [todos, setTodos] = useState([]);

  useEffect(() => { 
  fetch(`http://localhost:3000/user/1`)
  .then((res) => res.json())
  .then((res) => setTodos(res))
}, []);

  const renderTodos = () => 
    todos.todos?.map((todo) => {
      return (
        <>
      <StyledTodo key={todos.todos[todo]}>
      <StyledTodoButton>
        <input type="radio"></input>
      </StyledTodoButton>
      <StyledTodoDescription>
        <h3>{todo.title}</h3>
        <p>{todo.description}</p>
      </StyledTodoDescription>
      <StyledTodoButton>
        <span>Usuń</span>
      </StyledTodoButton>
    </StyledTodo> 
    </>
    )
    })
  
  return (
    <div>
  {renderTodos()}
  </div>
  );
};

export default Todo;
