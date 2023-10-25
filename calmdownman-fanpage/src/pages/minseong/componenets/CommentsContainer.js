import { useEffect, useState } from "react";
import styled from "styled-components";
import { getComments } from "../lib/api";
import CommentItem from "./CommentItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment } from "@fortawesome/free-regular-svg-icons";

const StyledCommentsContainer = styled.div`
  margin-top: 30px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const StyledHead = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  h1 {
    font-weight: 600;
    font-size: 36px;
  }
`;

const CommentsContainer = ({ videoId }) => {
  const [commentsList, setCommentsList] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getComments(videoId);
        setCommentsList(result.items);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, [videoId]);

  return (
    <>
      <StyledCommentsContainer>
        <StyledHead>
          <h1>
            Comments <FontAwesomeIcon icon={faComment} />
          </h1>
        </StyledHead>
        {commentsList.map((item, index) => (
          <CommentItem
            key={index}
            item={item.snippet.topLevelComment.snippet}
          />
        ))}
      </StyledCommentsContainer>
    </>
  );
};

export default CommentsContainer;
