import posts from "../testData/posts";
import dialogues from "../testData/dialogues";
import messages from "../testData/messages";


const state = {
  profilePage: {
    posts,
    textAreaValue: "What`s on your mind?..",
  },
  dialoguesPage: {
    dialogues,
    messages,
  },
};

let reRenderAll;

export const subscribe = (observer) => {
  reRenderAll = observer;
};

export const changeTextAreaValue = (newValue) => {
  state.profilePage.textAreaValue = newValue;
  reRenderAll(state);
};

export const addNewPost = () => {
  const newPost = {
    id: state.profilePage.posts.length + 1,
    author: {name: "Anonim Anonimus", avatar: "https://buddy.ai/buddy-dino.8e355d36.png"},
    post: {
      date: "2022-11-07",
      text: state.profilePage.textAreaValue
    }
  };
  state.profilePage.posts.push(newPost);
  reRenderAll(state);
};

export default state;