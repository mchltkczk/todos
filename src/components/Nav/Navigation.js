import StyledNav from "./Navigation.Style";
import Button from "./Button";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/Auth";
import Logout from "./Logout";
import { useState } from "react";

const Navigation = ({ setFilteredTodos }) => {
  const { isLogged } = useContext(AuthContext);

  return (
    <StyledNav>
      {isLogged && (
        <>
      <Button name="All tasks" status={"all"}/>
          <Button status={"todo"} indicator="red" name="Todo" />

          <Button
            status={"in progress"}
            indicator="yellow"
            name="In progress"
          />

          <Button status={"done"} indicator="green" name="Done" />
        </>
      )}
      <Logout />
    </StyledNav>
  );
};
export default Navigation;
