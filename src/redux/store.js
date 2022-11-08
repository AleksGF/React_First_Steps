import posts from "../testData/posts";
import dialogues from "../testData/dialogues";
import messages from "../testData/messages";
import profileReducer from "./profileReducer";
import dialoguesReducer from "./dialoguesReducer";

const store = {
  _state: {
    profilePage: {
      posts,
      textareaText: "What`s on your mind?..",
    },
    dialoguesPage: {
      dialogues,
      messages,
      textareaText: "",
    },
  },

  _callSubscriber() {
  },

  getState() {
    return this._state;
  },

  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    profileReducer(this._state.profilePage, action);
    dialoguesReducer(this._state.dialoguesPage, action);

    this._callSubscriber(this._state);
  },
};

export default store;