import React, { useState } from "react";
import classes from "./Comment.module.scss";
import TimeStampToUTC from "../utilities/TimeStampToUTC";
import NewComment from "./NewComment/NewComment";
import { useSelector } from "react-redux";

const Comment = ({ id, text, author, timestamp, parent_id }) => {
  const [replyComment, setReplyComment] = useState(false);
  const [childReplyComment, setChildReplyComment] = useState(false);
  const comments = useSelector((state) => state.comments);

  const onReplyClick = () => {
    setReplyComment(!replyComment);
  };

  const onAllowReplyBox = (source) => {
    if (source === "child") {
      setChildReplyComment(!childReplyComment);
    } else {
      setReplyComment(!replyComment);
    }
  };

  const timePortion = TimeStampToUTC(timestamp);

  const childComment = comments.data.filter(
    (comment) => comment.parent_id === id
  );

  const countReply =
    childComment.length > 0 ? `(${childComment.length})` : null;

  return (
    <>
      <li className={classes.comment}>
        <div className={classes.comment__image}>
          <img src={author.picture} alt="" />
        </div>
        <div className={classes.comment__details}>
          <div className={classes.comment__box}>
            <p className={classes.comment__name}>{author.name}</p>
            <p className={classes.comment__text}>{text}</p>
          </div>
          <div className={classes.comment__timer}>
            <span id={classes.time}>{timePortion}</span>
            <span id={classes.reply} onClick={onReplyClick}>
              Reply {countReply}
            </span>
          </div>
        </div>
      </li>
      {replyComment && (
        <div className={classes.comment__reply}>
          <NewComment
            source={"parent"}
            allowReplyBox={onAllowReplyBox}
            parent_id={id}
          />
        </div>
      )}
      {childComment.length > 0 && (
        <div className={classes.comment__child}>
          {childComment.map((comment) => (
            <Comment key={comment.id} {...comment} />
          ))}
        </div>
      )}
    </>
  );
};

export default Comment;
