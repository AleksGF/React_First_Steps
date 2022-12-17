import {usersAPI} from "../api/usersAPI";
import {followAPI} from "../api/followAPI";

const FOLLOW_USER = 'FOLLOW-USER';
const UNFOLLOW_USER = 'UNFOLLOW-USER';
const SET_USERS = 'SET-USERS';
const SET_USERS_PAGE = 'SET-USERS-PAGE';
const SET_USERS_TOTAL = 'SET-USERS-TOTAL';
const SET_IS_FETCHING = 'SET-IS-FETCHING';
const SET_IS_FOLLOWING_IN_PROGRESS = 'SET-IS-FOLLOWING-IN-PROGRESS';


const initialState = {
  users: [],
  usersCount: 5,
  usersPage: 1,
  usersTotal: 0,
  isFetching: false,
  usersFollowingInProgressFor: [],
};

export const setFollowUser = (userId) => ({type: FOLLOW_USER, userId});

export const setUnfollowUser = (userId) => ({type: UNFOLLOW_USER, userId});

export const setUsers = (newUsers) => ({type: SET_USERS, newUsers});

export const setUsersPage = (page) => ({type: SET_USERS_PAGE, page});

export const setUsersTotal = (usersTotal) => ({type: SET_USERS_TOTAL, usersTotal});

export const setIsFetching = (isFetching) => ({type: SET_IS_FETCHING, isFetching});

export const setIsFollowingInProgress = (userId, isFetching) => ({
  type: SET_IS_FOLLOWING_IN_PROGRESS,
  userId,
  isFetching
});


export const requestUsers = (page, count) => {
  return (dispatch => {
    dispatch(setIsFetching(true));
    usersAPI.requestUsers(page, count)
      .then(data => {
        if (!data.error) {
          dispatch(setUsers(data.items));
          dispatch(setUsersTotal(data.totalCount));
        } else {
          throw new Error(`Error: ${data?.error}`);
        }
        dispatch(setIsFetching(false));
      });
    dispatch(setUsersPage(page));
  });
};

export const followUser = userId => {
  return (dispatch => {
    dispatch(setIsFollowingInProgress(userId, true));
    followAPI.setFollowUser(userId)
      .then(data => {
        if (data.resultCode === 0) {
          dispatch(setFollowUser(userId));
        } else {
          throw new Error(`Error: ${data?.messages}`);
        }
        dispatch(setIsFollowingInProgress(userId, false));
      });
  });
};

export const unfollowUser = userId => {
  return (dispatch => {
    dispatch(setIsFollowingInProgress(userId, true));
    followAPI.setUnfollowUser(userId)
      .then(data => {
        if (data.resultCode === 0) {
          dispatch(setUnfollowUser(userId));
        } else {
          throw new Error(`Error: ${data?.messages}`);
        }
        dispatch(setIsFollowingInProgress(userId, false));
      });
  });
};


const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW_USER:
      return {
        ...state,
        users: [...state.users].map(item => item.id === action.userId ? {...item, followed: true} : item)
      };
    case UNFOLLOW_USER:
      return {
        ...state,
        users: [...state.users].map(item => item.id === action.userId ? {...item, followed: false} : item)
      };
    case SET_USERS:
      return {
        ...state,
        users: action.newUsers
      };
    case SET_USERS_PAGE:
      return {
        ...state,
        usersPage: action.page
      };
    case SET_USERS_TOTAL:
      return {
        ...state,
        usersTotal: action.usersTotal
      };
    case SET_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching
      };
    case SET_IS_FOLLOWING_IN_PROGRESS:
      return {
        ...state,
        usersFollowingInProgressFor: action.isFetching
          ? [...state.usersFollowingInProgressFor, action.userId]
          : state.usersFollowingInProgressFor.filter(el => el !== action.userId),
      };
    default:
      return state;
  }
};

export default usersReducer;