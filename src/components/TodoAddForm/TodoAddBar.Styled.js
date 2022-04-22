import styled from "styled-components";

const TodoAddBarStyled = styled.h3`
  border-radius: 50%;
  height: 70px;
  width: 70px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: lightblue;
  font-size: 50px;
  -webkit-box-shadow: 0px 0px 30px -7px rgba(66, 68, 90, 1);
  -moz-box-shadow: 0px 0px 30px -7px rgba(66, 68, 90, 1);
  box-shadow: 0px 0px 30px -7px rgba(66, 68, 90, 1);
  &:hover {
    cursor: pointer;
  }
  &:active {
    font-size: 45px;
    transition: 0.1s linear;
    -webkit-box-shadow: 0px 0px 86px -5px rgba(66, 68, 90, 1);
-moz-box-shadow: 0px 0px 86px -5px rgba(66, 68, 90, 1);
box-shadow: 0px 0px 86px -5px rgba(66, 68, 90, 1);
  }
`;

export default TodoAddBarStyled;
