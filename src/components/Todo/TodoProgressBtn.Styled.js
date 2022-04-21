import styled from 'styled-components';

const StyledProgressBtn = styled.div`
width: 25px;
height: 25px;
border-radius: 50%;
border: 3px solid red;

&:active {
    background-color: red;
    border: 8px solid white;
    transition: .3s linear;
}
`;

export default StyledProgressBtn;