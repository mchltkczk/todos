import styled from "styled-components";

const TodoAddBarStyled = styled.h3`
  border-radius: 5px;
  height: 30px;
  width: 500px;
  background-color: lightblue;
  text-align: center;
  &:hover {
      cursor: pointer;
  }
  &:active {
      height: 30px;
      height: 40px;
      transition: 0.1s linear;
  }
`;

export default TodoAddBarStyled;
