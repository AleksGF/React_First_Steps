import posts from "../testData/posts";
import {profileAPI} from "../api/profileAPI";
import {getDateNow} from "../helpers/getDateStr";

const ADD_NEW_POST = 'ADD-NEW-POST';
const SET_USERID = 'SET-USERID';
const SET_USER = 'SET-USER';
const SET_IS_FETCHING = 'SET-IS-FETCHING';
const SET_USER_STATUS = 'SET-USER-STATUS';

const initialState = {
  posts,
  userId: null,
  user: {},
  isFetching: false,
  userStatus: null,
};


export const addNewPost = (newPostText) => ({type: ADD_NEW_POST, newPostText});

export const setUserId = (userId) => ({type: SET_USERID, userId});

export const setUser = (user) => ({type: SET_USER, user});

export const setIsFetching = (isFetching) => ({type: SET_IS_FETCHING, isFetching});

export const setUserStatus = (userStatus) => ({type: SET_USER_STATUS, userStatus});


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

export const getUserStatus = (userId) => {
  return dispatch => {
    profileAPI.getUserStatus(userId)
      .then(data => {
        if (!data?.message) {
          dispatch(setUserStatus(data));
        } else {
          throw new Error(`Error: ${data?.messages}`);
        }
      });
  };
};

export const putUserStatus = (userStatus) => {
  return dispatch => {
    profileAPI.putUserStatus(userStatus)
      .then(data => {
        if (data.resultCode === 0) {
          dispatch(setUserStatus(userStatus));
        } else {
          throw new Error(`Error: ${data?.messages}`);
        }
      });
  };
};


const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEW_POST:
      return {
        ...state,
        posts: [
          ...state.posts,
          {
            id: state.posts.length + 1,
            author: {
              name: state.user?.fullName,
              avatar: state.user?.photos?.small
            },
            post: {
              date: getDateNow(),
              text: action.newPostText,
            },
          }
        ]
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
    case SET_USER_STATUS:
      return {
        ...state,
        userStatus: action.userStatus,
      }
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