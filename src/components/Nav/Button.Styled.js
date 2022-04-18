import styled from 'styled-components';

const StyledButton = styled.div`
    padding: 15px;
    display: flex;
    justify-content: flex-start;
    gap: 10px;
    align-items: center;
    border-radius: 12px;
    color: black;
    background-color: white;
    &:hover {
        background-color: red;
    }
`;

export default StyledButton;