import { StyledLoginForm, StyledInput } from "./LoginForm.Styled";
import { useState, useContext } from "react";
import { AuthContext } from "../context/Auth";
import { Link } from 'react-router-dom';


const LoginForm = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const { isLogged, handleLogin } = useContext(AuthContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    handleLogin(login, password);
  };
  return (
    <StyledLoginForm onSubmit={handleSubmit}>
      <StyledInput
        type="text"
        value={login}
        onChange={(e) => setLogin(e.target.value)}
        placeholder="login"
      />
      <StyledInput
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="hasło"
      />
      <button type="submit">Zaloguj</button>
      <Link to="/registration">Zarejestruj się</Link>
    </StyledLoginForm>
  );
};

export default LoginForm;
