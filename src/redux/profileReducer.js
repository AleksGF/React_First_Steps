const CHANGE_TEXTAREA_TEXT = 'CHANGE-TEXTAREA-TEXT';
const ADD_NEW_POST = 'ADD-NEW-POST';

export const changeTextareaTextCreator = (newText) => ({
  type: CHANGE_TEXTAREA_TEXT,
  text: newText
});

export const addNewPostCreator = () => ({type: ADD_NEW_POST});

const profileReducer = (state, action) => {
  switch (action.type) {
    case CHANGE_TEXTAREA_TEXT:
      state.textareaText = action.text;
      return state;
    case ADD_NEW_POST:
      const newPost = {
        id: state.posts.length + 1,
        author: {
          name: "Anonim Anonimus",
          avatar: "https://buddy.ai/buddy-dino.8e355d36.png"
        },
        post: {
          date: "2022-11-12",
          text: state.textareaText,
        },
      };
      state.posts.push(newPost);
      state.textareaText = "What`s on your mind?..";
      return state;
    default:
      return state;
  }
};

export default profileReducer;