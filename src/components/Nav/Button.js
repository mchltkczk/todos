import StyledButton from "./Button.Styled";
import StyledIndicator from "./Button-indicator.Style";
import { useContext } from "react";
import { FilteredTodosContext } from "../context/FilteredTodos";
const Button = ({ name, indicator, status }) => {
  const { setFilterTodos } = useContext(FilteredTodosContext);
  const filter = () => {
    setFilterTodos(status);
  };
  return (
    <StyledButton onClick={filter} status={status}>
      <StyledIndicator indicator={indicator} />
      <div>{name}</div>
    </StyledButton>
  );
};

export default Button;
