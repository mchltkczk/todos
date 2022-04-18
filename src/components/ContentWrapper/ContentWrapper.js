import StyledContentWrapper from "./ContentWrapper.Style";

const ContentWrapper = ({header, content}) => {
  return (
  <StyledContentWrapper>
    <h2>{header}</h2>
    <div>{content}</div>
  </StyledContentWrapper>
  )
};
export default ContentWrapper;
