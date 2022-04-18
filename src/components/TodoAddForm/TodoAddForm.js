import { StyledLoginForm } from "../LoginForm.js/LoginForm.Styled";
import { useEffect, useState } from "react";

const TodoAddForm = ({ header }) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [formVisible, setFormVisible] = useState("none");
  const [progress, setProgress] = useState("todo");
  const [todos, setTodos] = useState({});

  const handleTitle = (event) => setTitle(event.target.value);
  const handleDesc = (event) => setDesc(event.target.value);
  const handleProgress = (event) => setProgress(event.target.value);

  const userId = 1;

  const handleSubmitTodo = (event) => {
    event.preventDefault();

    fetch(`http://localhost:3000/user/1`)
      .then((res) => res.json())
      .then((res) => setTodos(res));
    const pushTodos = todos.todos?.map((todo) => { return todo })
    pushTodos.unshift({
      progress: progress,
      title: title,
      description: desc
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
    }).then(() => {
      setTitle("");
      setDesc("");
    })
    .finally((res) => {
      fetch(`http://localhost:3000/user/1`)
      .then((res) => res.json())
      .then((res) => setTodos(res));
    })
  };

  useEffect(() => { 
    fetch(`http://localhost:3000/user/1`)
    .then((res) => res.json())
    .then((res) => setTodos(res))
  }, []);

  return (
    <div>
      <h3>{header}</h3>
      <StyledLoginForm>
        <label name="tytul">Tytuł</label>
        <input type="text" onChange={handleTitle} value={title}></input>
        <label name="opis">Opis</label>
        <input type="text" onChange={handleDesc} value={desc}></input>
        <select onChange={handleProgress} value={progress}>
          <option >
            todo
          </option>
          <option>
            in progress
          </option>
        </select>
        <button onClick={handleSubmitTodo} type="submit">
          Dodaj
        </button>
      </StyledLoginForm>
    </div>
  );
};

export default TodoAddForm;
