import dialogues from "../testData/dialogues";
import messages from "../testData/messages";

const CHANGE_MESSAGE_BODY = 'CHANGE_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

const initialState = {
  dialogues,
  messages,
  textareaText: "",
};

export const changeMessageBody = (newBody) => ({
  type: CHANGE_MESSAGE_BODY,
  body: newBody
});

export const sendMessage = (dialogueId) => ({
  type: SEND_MESSAGE,
  dialogueId: dialogueId
});

const dialoguesReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_MESSAGE_BODY:
      return {
        ...state,
        textareaText: action.body,
      };
    case SEND_MESSAGE:
      return {
        ...state,
        messages: [
          ...state.messages,
          {
            authorId: 0,
            addresseeId: Number(action.dialogueId),
            date: "2022-11-11",
            message: state.textareaText,
          }
        ],
        textareaText: "",
      };
    default:
      return state;
  }
};

export default dialoguesReducer;