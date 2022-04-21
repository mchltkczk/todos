import StyledNav from "./Navigation.Style";
import Button from "./Button";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/Auth";
import Logout from "./Logout";

const Navigation = () => {
  const { isLogged } = useContext(AuthContext);

  return (
    <StyledNav>
      <Logout />
      <Link to="/">
        <Button name="Home" />
      </Link>
      {isLogged && (
        <>
          <Link to="/todo">
            <Button indicator="red" name="Todo" />
          </Link>

          <Link to="/inprogress">
            <Button indicator="yellow" name="In progress" />
          </Link>

          <Link to="/done">
            <Button indicator="green" name="Done" />
          </Link>
        </>
      )}
    </StyledNav>
  );
};
export default Navigation;
