import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Navigation from "../components/Nav/Navigation";
import ContentWrapper from "../components/ContentWrapper/ContentWrapper";
import Main from "../components/Main/Main";
import LoginForm from "../components/LoginForm.js/LoginForm";
import TodoAddForm from "../components/TodoAddForm/TodoAddForm";
import { useContext } from "react";
import { AuthContext } from "../components/context/Auth";
import Todo from "../components/Todo/Todo";
import { useState } from "react";

const Home = () => {
  const { isLogged } = useContext(AuthContext);
  const [todosRender, setTodosRender] = useState(0);
  return (
    <>
      <Header />
      <Main
        header={isLogged ? "" : "Zaloguj się"}
        content={
          <>
            {isLogged ? (
              <>
                <TodoAddForm
                  header="+"
                  setTodosRender={setTodosRender}
                />{" "}
                <Todo todoProgress={"all"} todosRender={todosRender} />
              </>
            ) : (
              <LoginForm />
            )}
          </>
        }
      />
      <Footer />
    </>
  );
};

export default Home;
