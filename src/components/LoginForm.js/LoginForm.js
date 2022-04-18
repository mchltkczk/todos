import { StyledLoginForm, StyledInput } from "./LoginForm.Styled";

const LoginForm = () => {
    return (
        <StyledLoginForm>
            <StyledInput type="text" placeholder="login" />
            <StyledInput type="text" placeholder="hasło" />
        </StyledLoginForm>
    )
}

export default LoginForm;