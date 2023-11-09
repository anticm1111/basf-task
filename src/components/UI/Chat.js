import React from "react";
import styled from "styled-components";

const ChatCard = styled.div`
  width: 79.8rem;
  height: 48.5rem;
  background-color: #eceef1;
  overflow-y: scroll;
  position: absolute;
  /* margin: 0 auto; */
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding-left: 3.6rem;
`;

const Chat = (props) => {
  return <ChatCard>{props.children}</ChatCard>;
};

export default Chat;
