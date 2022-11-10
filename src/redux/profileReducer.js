import posts from "../testData/posts";

const CHANGE_TEXTAREA_TEXT = 'CHANGE-TEXTAREA-TEXT';
const ADD_NEW_POST = 'ADD-NEW-POST';

const initialState = {
  posts,
  textareaText: "What`s on your mind?..",
};

export const changeTextareaTextCreator = (newText) => ({
  type: CHANGE_TEXTAREA_TEXT,
  text: newText
});

export const addNewPostCreator = () => ({type: ADD_NEW_POST});

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_TEXTAREA_TEXT:
      return {
        ...state,
        textareaText: action.text,
      };
    case ADD_NEW_POST:
      return {
        ...state,
        posts: [
          ...state.posts,
          {
            id: state.posts.length + 1,
            author: {
              name: "Anonim Anonimus",
              avatar: "https://buddy.ai/buddy-dino.8e355d36.png"
            },
            post: {
              date: "2022-11-12",
              text: state.textareaText,
            },
          }
        ],
        textareaText: "What`s on your mind?..",
      };
    default:
      return state;
  }
};

export default profileReducer;