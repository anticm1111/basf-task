import { produce } from "immer";
import * as TYPES from "../actions/types";

const defaultState = {
  data: [],
};

export default (state = defaultState, { type = "", payload = [] }) =>
  produce(state, (draft) => {
    switch (type) {
      case TYPES.GET_COMMENTS:
        draft.data = payload;
        return draft;

      case TYPES.ADD_COMMENT:
        draft.data = state.data.concat(payload);
        return draft;
      default:
        return;
    }
  });
