import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Navigation from "../components/Nav/Navigation";
import ContentWrapper from "../components/ContentWrapper/ContentWrapper";
import Main from "../components/Main/Main";
import Todo from "../components/Todo/Todo";

const Done = () => {
  
  return (
    <>
      <Header />
      <Main header="Wykonane zadania" content={<Todo todoProgress={"done"} />} />
      <Footer />
    </>
  );
};

export default Done;
