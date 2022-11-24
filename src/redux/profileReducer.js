import posts from "../testData/posts";
import {profileAPI} from "../api/profileAPI";

const CHANGE_TEXTAREA_TEXT = 'CHANGE-TEXTAREA-TEXT';
const ADD_NEW_POST = 'ADD-NEW-POST';
const SET_USERID = 'SET-USERID';
const SET_USER = 'SET-USER';
const SET_IS_FETCHING = 'SET-IS-FETCHING';

const initialState = {
  posts,
  textareaText: "What`s on your mind?..",
  userId: null,
  user: {},
  isFetching: false,
};

export const changeTextareaTextCreator = (newText) => ({
  type: CHANGE_TEXTAREA_TEXT,
  text: newText
});

export const addNewPostCreator = () => ({type: ADD_NEW_POST});

export const setUserId = (userId) => ({type: SET_USERID, userId});

export const setUser = (user) => ({type: SET_USER, user});

export const setIsFetching = (isFetching) => ({type: SET_IS_FETCHING, isFetching});


export const getUserById = (userId) => {
  return dispatch => {
    dispatch(setIsFetching(true));
    dispatch(setUserId(userId));
    profileAPI.getUser(userId)
      .then(data => {
        dispatch(setUser(data));
        dispatch(setIsFetching(false));
      });
  };
};


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
    case SET_USERID:
      return {
        ...state,
        userId: action.userId,
      };
    case SET_USER:
      return {
        ...state,
        user: action.user,
      };
    case SET_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching
      };
    default:
      return state;
  }
};

export default profileReducer;