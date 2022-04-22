import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Navigation from "../components/Nav/Navigation";
import ContentWrapper from "../components/ContentWrapper/ContentWrapper";
import Main from "../components/Main/Main";
import Todo from "../components/Todo/Todo";
import TodoAddForm from "../components/TodoAddForm/TodoAddForm";
import { useState } from "react";

const InProgress = () => {
  const [todosRender, setTodosRender] = useState(0);
  return (
    <>
      <Header />
      <Main header="Zadania w trakcie..." content={
          <>
            <TodoAddForm
              header="+"
              setTodosRender={setTodosRender}
            />{" "}
            <Todo todoProgress={"in progress"} todosRender={todosRender} />{" "}
          </>
        }
      />
      <Footer />
    </>
  );
};

export default InProgress;
