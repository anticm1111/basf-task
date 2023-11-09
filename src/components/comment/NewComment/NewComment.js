import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { generateRandomId } from "../../utilities/RandomIdGenerator";
import { addNewComment } from "../../../actions";

const InputBox = styled.div`
  width: 100%;
  max-width: 72.3rem;
  padding: 7px 18px;
  border-radius: 5px;
  background: #fff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.3rem;

  button {
    border-radius: 5px;
    color: #1e1e1e;
    font-size: 1rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    padding: 11px 27px;
    border: none;
    background-color: rgba(217, 217, 217, 1);
    cursor: pointer;
  }

  input {
    border: none;
    flex-grow: 1;
  }
`;

const NewComment = ({ source, allowReplyBox, parent_id }) => {
  const CommentRef = useRef();
  const dispatch = useDispatch();

  const onClickHandler = () => {
    const randomId = generateRandomId();
    const currentDate = new Date();
    const gmtPlus1Offset = 60;
    const gmtPlus1Timestamp = new Date(
      currentDate.getTime() + gmtPlus1Offset * 60000
    );
    const gmtPlus1UnixTimestamp = gmtPlus1Timestamp.getTime();

    const newComment = {
      id: randomId,
      author: {
        name: "Me",
        picture: "img/me.jpg",
      },
      text: CommentRef.current.value,
      timestamp: gmtPlus1UnixTimestamp,
      parent_id: parent_id || undefined,
    };

    dispatch(addNewComment(newComment));
    CommentRef.current.value = "";

    if (allowReplyBox) {
      allowReplyBox(source);
    }
  };

  return (
    <InputBox>
      <input type="text" placeholder="...type something" ref={CommentRef} />
      <button onClick={onClickHandler}>Send</button>
    </InputBox>
  );
};

export default NewComment;
