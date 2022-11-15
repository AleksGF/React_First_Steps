const FOLLOW_USER = 'FOLLOW-USER';
const UNFOLLOW_USER = 'UNFOLLOW-USER';
const SET_USERS = 'SET-USERS';
const SET_USERS_PAGE = 'SET-USERS-PAGE';
const SET_USERS_TOTAL = 'SET-USERS-TOTAL';
const SET_IS_FETCHING = 'SET-IS-FETCHING';


const initialState = {
  users: [],
  usersCount: 5,
  usersPage: 1,
  usersTotal: 0,
  isFetching: false,
};

export const followUser = (userId) => ({type: FOLLOW_USER, userId});

export const unfollowUser = (userId) => ({type: UNFOLLOW_USER, userId});

export const setUsers = (newUsers) => ({type: SET_USERS, newUsers});

export const setUsersPage = (page) => ({type: SET_USERS_PAGE, page});

export const setUsersTotal = (usersTotal) => ({type: SET_USERS_TOTAL, usersTotal});

export const setIsFetching = (isFetching) => ({type: SET_IS_FETCHING, isFetching});

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
    default:
      return state;
  }
};

export default usersReducer;