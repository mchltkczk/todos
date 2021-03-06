import styled from 'styled-components';

const StyledLoginForm = styled.form`
    display: ${({display}) => display === true ? 'flex' : 'none'};
    transition:  0.3s linear;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 20px;
    
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