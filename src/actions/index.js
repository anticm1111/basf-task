import * as TYPES from "../actions/types";

// COMMENT

export const getComments = (comments) => (dispatch) => {
  dispatch({ type: TYPES.GET_COMMENTS, payload: comments });
};

export const addNewComment = (comment) => (dispatch) => {
  dispatch({ type: TYPES.ADD_COMMENT, payload: comment });
};

export const allowReply = () => (dispatch) => {
  dispatch({ type: TYPES.DISPLAY_REPLYBOX });
};
