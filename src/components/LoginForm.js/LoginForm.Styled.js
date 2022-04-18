import styled from 'styled-components';

const StyledLoginForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 10px;
    
`;

const StyledInput = styled.input`
    width: 200px;
    height: 40px;
    text-align: center;
    font-size: 16px;
    background-color: lightskyblue;
    border: 1px solid black;
    &:focus {
        background-color: white;
    }
`

export { StyledLoginForm, StyledInput };