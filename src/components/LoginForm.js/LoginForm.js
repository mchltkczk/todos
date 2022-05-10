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
    <form style={{ display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'center'}} onSubmit={handleSubmit}>
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
      <button style={{width: '100%', height: '30px'}} type="submit">Zaloguj</button>
      <Link to="/registration">Zarejestruj się</Link>
    </form>
  );
};

export default LoginForm;
