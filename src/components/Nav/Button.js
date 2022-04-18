import StyledButton from "./Button.Styled"
import StyledIndicator from "./Button-indicator.Style";

const Button = ({name, indicator}) => {
    return (
    <StyledButton>
        <StyledIndicator indicator={indicator} />
        <div>{name}</div>
    </StyledButton>
    )
}

export default Button;