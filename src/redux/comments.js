import { COMMENTS } from "../shared/comments";
import * as ActionTypes from "./ActionTypes";

export const Comments = (state = COMMENTS, action) => {
   switch (action.type) {
      case ActionTypes.ADD_COMMENT:
         const comment = action.payload;
         // adding data to payload
         comment.id = state.length;
         comment.date = new Date().toISOString();
         // concat array to attach without mutation
         return state.concat(comment);
      default:
         return state;
   }
};
