import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Navigation from "../components/Nav/Navigation";
import ContentWrapper from "../components/ContentWrapper/ContentWrapper";
import Main from "../components/Main/Main";

const InProgress = () => {
  
  return (
    <>
      <Header />
      <Main header="Zadania w trakcie..."/>
      <Footer />
    </>
  );
};

export default InProgress;
