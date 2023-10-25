import { useParams } from "react-router-dom";
import styled from "styled-components";
import CommentsContainer from "./CommentsContainer";

const VideoItem = () => {
  const { videoId } = useParams();

  const StyledWrapper = styled.div`
    width: 100%;
    margin-top: 10px;
    padding: 20px;
    display: flex;
    justify-content: center;
  `;
  const StyledIframe = styled.iframe`
    width: 640px;
    height: 360px;
    border-radius: 20px;
  `;
  return (
    <>
      <StyledWrapper>
        <StyledIframe
          title={videoId}
          src={`https://www.youtube.com/embed/${videoId}?showinfo=0&enablejsapi=1&origin=http://localhost:3000`}
        />
      </StyledWrapper>

      <CommentsContainer videoId={videoId} />
    </>
  );
};

export default VideoItem;
