import ContentWrapper from "../ContentWrapper/ContentWrapper";
import Navigation from "../Nav/Navigation";
import StyledMain from "./Main.style";
import { useState } from 'react';

const Main = ({header, content}) => {
    const [filteredTodos, setFilteredTodos] = useState('all')
    return (
        <StyledMain>
            <Navigation setFilteredTodos={setFilteredTodos}/>
            <ContentWrapper header={header} content={content}/>
        </StyledMain>

    )
}
export default Main;