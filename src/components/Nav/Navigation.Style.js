import styled from 'styled-components';

const StyledNav = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    padding: 50px 10px 50px 10px;
    width: 200px;
    border-right: 1px black solid;
    &:hover {
        cursor: pointer;
    }
`;

export default StyledNav;