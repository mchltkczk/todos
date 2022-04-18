import ContentWrapper from "../ContentWrapper/ContentWrapper";
import Navigation from "../Nav/Navigation";
import StyledMain from "./Main.style";

const Main = ({header, content}) => {
    return (
        <StyledMain>
            <Navigation />
            <ContentWrapper header={header} content={content}/>
        </StyledMain>

    )
}
export default Main;