import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Navigation from "../components/Nav/Navigation";
import ContentWrapper from "../components/ContentWrapper/ContentWrapper";
import Main from "../components/Main/Main";
import LoginForm from "../components/LoginForm.js/LoginForm";
import TodoAddForm from "../components/TodoAddForm/TodoAddForm";

const Home = () => {
  return (
    <>
      <Header />
      <Main
        header="Zaloguj się"
        content={
          <>
            <LoginForm /> 
            <TodoAddForm header="Dodaj nowe zadanie:"/>
          </>
        }
      />
      <Footer />
    </>
  );
};

export default Home;
