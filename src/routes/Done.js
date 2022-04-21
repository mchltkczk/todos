import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Navigation from "../components/Nav/Navigation";
import ContentWrapper from "../components/ContentWrapper/ContentWrapper";
import Main from "../components/Main/Main";
import Todo from "../components/Todo/Todo";
import TodoAddForm from "../components/TodoAddForm/TodoAddForm";
import { useState } from "react";
const Done = () => {
  const [todosRender, setTodosRender] = useState(0);
  return (
    <>
      <Header />
      <Main
        header="Wykonane zadania"
        content={
          <>
            <TodoAddForm
              header="Dodaj nowe zadanie:"
              setTodosRender={setTodosRender}
            />{" "}
            <Todo todoProgress={"done"} todosRender={todosRender} />{" "}
          </>
        }
      />
      <Footer />
    </>
  );
};

export default Done;
