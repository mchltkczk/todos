import TodoDeleteStyled from "./TodoDelete.Styled";
import { useState, useEffect } from 'react';

const TodoDelete = ({ del, todos, setTodos, setTodosRender }) => {
  

  const handleDelete = () => {
    let deleteItem = todos.findIndex((i) => i.id === del.id);
    todos.splice(deleteItem, 1);
    fetch(`http://localhost:3000/user/1`, {
      method: "PATCH",
      headers: {
        Accept: "appliaction/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        todos: todos,
      })
    })
    .then(() => {
        fetch(`http://localhost:3000/user/1`)
        .then((res) => res.json())
        .then((res) => setTodos(res));
    })

    
};

useEffect(() => {
  fetch(`http://localhost:3000/user/1`)
    .then((res) => res.json())
    .then((res) => setTodos(res));
}, []);

  return (
    <>
      <TodoDeleteStyled onClick={handleDelete}>
      </TodoDeleteStyled>
    </>
  );
};

export default TodoDelete;
