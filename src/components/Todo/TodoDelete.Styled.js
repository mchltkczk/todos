import styled from "styled-components";

const TodoDeleteStyled = styled.div`
  position: absolute;
  right: 20px;
  bottom: 20px;
  width: 32px;
  height: 32px;
  opacity: 0.7;
  &:hover {
    cursor: pointer;
  }
  &:active {
    opacity: 1;
  }
  &:before,
  &:after {
    position: absolute;
    left: 15px;
    content: " ";
    height: 33px;
    width: 4px;
    background-color: black;
  }
  &:before {
    transform: rotate(45deg);
  }
  &:after {
    transform: rotate(-45deg);
  }
`;
export default TodoDeleteStyled;
