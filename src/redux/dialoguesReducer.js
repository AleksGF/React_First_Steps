import dialogues from "../testData/dialogues";
import messages from "../testData/messages";
import {getDateNow} from "../helpers/getDateStr";

const SEND_MESSAGE = 'SEND_MESSAGE';

const initialState = {
  dialogues,
  messages
};

export const sendMessage = (newMessageText, dialogueId) => ({
  type: SEND_MESSAGE,
  newMessageText,
  dialogueId
});

const dialoguesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      return {
        ...state,
        messages: [
          ...state.messages,
          {
            authorId: 0,
            addresseeId: Number(action.dialogueId),
            date: getDateNow(),
            message: action.newMessageText,
          }
        ]
      };
    default:
      return state;
  }
};

export default dialoguesReducer;