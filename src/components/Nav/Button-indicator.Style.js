import styled from 'styled-components';

const StyledIndicator = styled.div`
    background-color: ${({indicator}) => indicator};
    border-radius: 3px;
    width: 10px;
    height: 10px;
`;

export default StyledIndicator;