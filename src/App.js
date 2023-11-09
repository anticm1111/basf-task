import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import Chat from "./components/UI/Chat";
import CommentList from "./components/comment/CommentList";
import NewComment from "./components/comment/NewComment/NewComment";
import { getComments } from "./actions";
import { GroupCommentsByDate } from "./components/utilities/GroupComments";
import chatComments from "./feed/comments.json";

const DateComments = styled.h2`
  font-size: 0.9rem;
  font-weight: 400;
  line-height: 1.1rem;
  letter-spacing: 0em;
  color: rgba(30, 30, 30, 1);
  display: flex;
  justify-content: center;
  margin-bottom: 3.1rem;
  padding-top: 3.1rem;
`;

const App = () => {
  const dispatch = useDispatch();
  const comments = useSelector((state) => state.comments);
  const feedData = chatComments.data.comments;

  useEffect(() => {
    dispatch(getComments(feedData));
  }, []);

  const groupedComments = GroupCommentsByDate(comments.data);

  return (
    <Chat>
      {Object.entries(groupedComments).map(([date, comments]) => (
        <div key={date}>
          <DateComments>{date}</DateComments>
          <CommentList comments={comments} />
        </div>
      ))}
      <NewComment source={"parent"} />
    </Chat>
  );
};

export default App;
