const CHANGE_MESSAGE_BODY = 'CHANGE_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

export const changeMessageBodyCreator = (newBody) => ({
  type: CHANGE_MESSAGE_BODY,
  body: newBody
});

export const sendMessageCreator = (dialogueId) => ({
  type: SEND_MESSAGE,
  dialogueId: dialogueId
});

const dialoguesReducer = (state, action) => {
  switch (action.type) {
    case CHANGE_MESSAGE_BODY:
      state.textareaText = action.body;
      return state;
    case SEND_MESSAGE:
      const newMessage = {
        authorId: 0,
        addresseeId: Number(action.dialogueId),
        date: "2022-11-11",
        message: state.textareaText,
      };
      state.messages.push(newMessage);
      state.textareaText = "";
      return state;
    default:
      return state;
  }
};

export default dialoguesReducer;