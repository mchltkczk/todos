import styled from "styled-components";

const StyledTodo = styled.div`
  width: 500px;
  height: 70px;
  display: flex;
  gap: 20px;
  justify-content: flex-start;
  align-items: center;
  /* border: 1px solid black; */
  border-radius: 12px;
  background-color: rgb(227, 221, 221);
  -webkit-box-shadow: 0px 0px 27px -2px rgba(0, 0, 0, 0.51);
  -moz-box-shadow: 0px 0px 27px -2px rgba(0, 0, 0, 0.51);
  box-shadow: 0px 0px 27px -2px rgba(0, 0, 0, 0.51);
`;

const StyledTodoButton = styled.div`
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: 1px black solid;
`;
const StyledTodoDescription = styled.div`
  display: flex;
  flex-direction: column;
`;

export { StyledTodo, StyledTodoButton, StyledTodoDescription };
