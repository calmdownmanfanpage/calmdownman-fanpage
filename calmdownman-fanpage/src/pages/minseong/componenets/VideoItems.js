import styled from "styled-components";
import { Link } from "react-router-dom";
const StyledItemContainer = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const StyledItemWrapper = styled.div`
  width: 100%;
`;

const StyledThumbnail = styled.div`
  background-image: url(${(props) => props.thumbnail});
  width: 200px;
  height: 150px;
  border-radius: 20px;
  background-repeat: no-repeat;
  background-size: contain;
`;

const StyledLink = styled(Link)``;

const StyledSpan = styled.span`
  font-weight: 300;
  font-size: 10px;
`;

const VideoItems = ({ info }) => {
  return (
    <>
      <StyledItemContainer>
        <StyledItemWrapper>
          <StyledLink to={`/video/${info.id.videoId}`}>
            <StyledThumbnail thumbnail={info.snippet.thumbnails.default.url} />
          </StyledLink>
          <StyledSpan>{info.snippet.title}</StyledSpan>
          <StyledSpan>{info.snippet.publishedAt.split("T")[0]}</StyledSpan>
        </StyledItemWrapper>
      </StyledItemContainer>
    </>
  );
};

export default VideoItems;
