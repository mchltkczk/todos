import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Navigation from "../components/Nav/Navigation";
import ContentWrapper from "../components/ContentWrapper/ContentWrapper";
import Main from "../components/Main/Main";
import Todo from "../components/Todo/Todo";
import { useState, useEffect } from 'react';
import TodoAddForm from "../components/TodoAddForm/TodoAddForm";

const Todos = () => {
  const [todosRender, setTodosRender] = useState(0);

  return (
    <>
      <Header />
      <Main header="Zadania do wykonania ..." content={
          <>
            <TodoAddForm
              header="Dodaj nowe zadanie:"
              setTodosRender={setTodosRender}
            />{" "}
            <Todo todoProgress={"todo"} todosRender={todosRender} />{" "}
          </>
        }
      />
      <Footer />
    </>
  );
};

export default Todos;
