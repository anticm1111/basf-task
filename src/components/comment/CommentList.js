import React from "react";
import Comment from "./Comment";
import styled from "styled-components";

const List = styled.ul`
  list-style: none;
`;

const CommentList = ({ comments }) => {
  return (
    <List>
      {comments.map(
        (comment) =>
          !comment.parent_id && (
            <Comment
              key={comment.id}
              id={comment.id}
              text={comment.text}
              author={comment.author}
              timestamp={comment.timestamp}
            />
          )
      )}
    </List>
  );
};

export default CommentList;
