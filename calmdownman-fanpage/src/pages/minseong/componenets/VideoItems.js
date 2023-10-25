import styled from "styled-components";
import { Link } from "react-router-dom";
const StyledItemContainer = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledItemWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const StyledThumbnail = styled.div`
  background-image: url(${(props) => props.thumbnail});
  width: 200px;
  height: 150px;
  border-radius: 20px;
  background-repeat: no-repeat;
  background-size: contain;
  &:hover {
    scale: 1.2;
  }
  transition: scale 0.3s ease-in-out;
`;

const StyledLink = styled(Link)`
  cursor: pointer;
`;

const StyledSpan = styled.span`
  font-weight: 600;
  font-size: 10px;
  margin-top: 8px;
`;

const VideoItems = ({ info }) => {
  return (
    <>
      <StyledItemContainer>
        <StyledItemWrapper>
          <StyledLink to={`/video/${info.id.videoId}`}>
            <StyledThumbnail thumbnail={info.snippet.thumbnails.default.url} />
          </StyledLink>
          <StyledSpan>◾{info.snippet.title}</StyledSpan>
          <StyledSpan>🕒{info.snippet.publishedAt.split("T")[0]}</StyledSpan>
        </StyledItemWrapper>
      </StyledItemContainer>
    </>
  );
};

export default VideoItems;
