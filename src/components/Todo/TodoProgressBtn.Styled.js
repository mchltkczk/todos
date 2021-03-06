import styled from 'styled-components';

const StyledProgressBtn = styled.div`
width: 25px;
height: 25px;
border-radius: 50%;
border: 3px solid white;

&:hover {
    cursor: pointer;
}
&:active {
    background-color: red;
    border: 8px solid white;
    transition: .2s linear;
}
`;

export default StyledProgressBtn;