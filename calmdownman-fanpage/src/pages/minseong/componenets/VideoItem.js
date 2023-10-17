import styled from "styled-components";

const StyledItemContainer = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const StyledThumbnail = styled.div`
  background-image: url(${(props) => props.thumbnail});
  width: 200px;
  height: 100px;
  background-repeat: no-repeat;
  background-size: contain;
`;

const VideoItem = ({ info }) => {
  return (
    <>
      <StyledItemContainer>
        <StyledThumbnail thumbnail={info.snippet.thumbnails.default.url} />
      </StyledItemContainer>
    </>
  );
};

export default VideoItem;
