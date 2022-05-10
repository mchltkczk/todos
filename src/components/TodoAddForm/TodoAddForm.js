import { StyledLoginForm } from "../LoginForm.js/LoginForm.Styled";
import { useEffect, useState } from "react";
import { v4 as genKey } from "uuid";
import TodoAddBarStyled from "./TodoAddBar.Styled";
import TodoStyledWrapper from "./TodoWrapper.styled";

const TodoAddForm = ({ header, setTodosRender }) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [progress, setProgress] = useState("todo");
  const [todos, setTodos] = useState([{}]);
  const [display, setDisplay] = useState(false)

  const handleTitle = (event) => setTitle(event.target.value);
  const handleDesc = (event) => setDesc(event.target.value);
  const handleProgress = (event) => setProgress(event.target.value);
  const handleShowForm = () => {
    setDisplay(!display)
  }
  const pushTodos = todos.todos?.map((todo) => {
    return todo;
  });
  const handleSubmitTodo = (event) => {
    event.preventDefault();
    fetch(`http://localhost:3000/user/1`)
      .then((res) => res.json())
      .then((res) => setTodos(res));
    console.log(pushTodos)
    console.log(todos)

    pushTodos.unshift({
      id: genKey(),
      progress: progress,
      title: title,
      description: desc,
    });

    fetch(`http://localhost:3000/user/1`, {
      method: "PATCH",
      headers: {
        Accept: "appliaction/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        todos: pushTodos,
      }),
    })
      .then(() => {
        setTitle("");
        setDesc("");
        setTodosRender(todos);
        setTodos(todos)
      })
      // .finally((res) => {
      //   fetch(`http://localhost:3000/user/1`)
      //     .then((res) => res.json())
      //     .then((res) => setTodos(res));
      // });
  };

  useEffect(() => {
    fetch(`http://localhost:3000/user/1`)
      .then((res) => res.json())
      .then((res) => setTodos(res));
  }, [title]);

  return (
    <TodoStyledWrapper>
      <TodoAddBarStyled onClick={handleShowForm}>{header}</TodoAddBarStyled>

      <StyledLoginForm display={display}>
        <label name="tytul">Tytuł</label>
        <input type="text" onChange={handleTitle} value={title}></input>
        <label name="opis">Opis</label>
        <input type="text" onChange={handleDesc} value={desc}></input>
        <select onChange={handleProgress} value={progress}>
          <option>todo</option>
          <option>in progress</option>
        </select>
        <button onClick={handleSubmitTodo} type="submit">
          Dodaj
        </button>
      </StyledLoginForm>
    </TodoStyledWrapper>
  );
};

export default TodoAddForm;
