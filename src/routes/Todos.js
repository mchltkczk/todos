import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Navigation from "../components/Nav/Navigation";
import ContentWrapper from "../components/ContentWrapper/ContentWrapper";
import Main from "../components/Main/Main";
import Todo from "../components/Todo/Todo";
import { useState, useEffect } from 'react';

const Todos = () => {

  return (
    <>
      <Header />
      <Main header="Zadania do wykonania ..." content={<Todo todoProgress={"todo"} />}/>
      <Footer />
    </>
  );
};

export default Todos;
