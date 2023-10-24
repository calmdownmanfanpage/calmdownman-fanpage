import styled from "styled-components";

const StyledCommentWrapper = styled.div`
  width: 1024px;
  display: flex;
  align-items: center;
  margin: 0 auto;
`;

const StyledIcon = styled.div`
  background-image: url(${(props) => props.profile});
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-size: contain;
  box-sizing: border-box;
  background-repeat: no-repeat;
  margin-right: 10px;
`;

const StyledCommentBody = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
  padding: 5px 10px;
  background-color: whitesmoke;
  border-radius: 15px;
`;

const StyledUser = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  h1 {
    font-size: 12px;
    margin-right: 10px;
  }
  h3 {
    font-size: 10px;
  }
`;

const StyledContent = styled.div`
  padding: 5px;
  max-width: 900px;
`;
const CommentItem = ({ item }) => {
  return (
    <>
      <StyledCommentWrapper>
        <StyledIcon profile={item.authorProfileImageUrl} />
        <StyledCommentBody>
          <StyledContent>
            <StyledUser>
              <h1>@{item.authorDisplayName}</h1>
              <h3>🕒{item.publishedAt.split("T")[0]}</h3>
            </StyledUser>
          </StyledContent>
          <StyledContent>
            <p>{item.textOriginal}</p>
          </StyledContent>
          <StyledContent>
            <h3>💛 {item.likeCount}</h3>
          </StyledContent>
        </StyledCommentBody>
      </StyledCommentWrapper>
    </>
  );
};

export default CommentItem;
