import StyledNav from "./Navigation.Style";
import Button from "./Button";
import { Link } from 'react-router-dom';


const Navigation = () => {
  return (
    <StyledNav>
      <Link to="/"><Button name="Home" /></Link>
      <Link to="/todo"><Button indicator="red" name="Todo" /></Link>
      <Link to="/inprogress"><Button indicator="yellow" name="In progress" /></Link>
      <Link to="/done"><Button indicator="green" name="Done" /></Link>
    </StyledNav>
  );
};
export default Navigation;
