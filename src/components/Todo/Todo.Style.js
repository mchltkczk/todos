import styled from "styled-components";

const StyledTodo = styled.div`
  position: relative;
  width: 500px;
  height: 70px;
  display: flex;
  gap: 20px;
  justify-content: flex-start;
  align-items: center;
  /* border: 1px solid black; */
  border-radius: 12px;
  /* background-color: rgb(227, 221, 221); */
  /* background-color: ${({progress}) => progress ==='todo' ? 'red' : 'yellow'}; */
  background-color: ${({progress}) => { 
    if (progress ==='todo') {
      return 'red'
      } else if (progress === 'in progress') {
        return 'yellow'
       } else {
        return 'green'
       } }};
       transition: all .2s;
  -webkit-box-shadow: 0px 0px 27px -2px rgba(0, 0, 0, 0.51);
  -moz-box-shadow: 0px 0px 27px -2px rgba(0, 0, 0, 0.51);
  box-shadow: 0px 0px 27px -2px rgba(0, 0, 0, 0.51);
`;

const StyledTodoButton = styled.div`
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 25px;
`;
const StyledTodoDescription = styled.div`
  display: flex;
  flex-direction: column;
`;

export { StyledTodo, StyledTodoButton, StyledTodoDescription };
