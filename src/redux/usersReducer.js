const FOLLOW_USER = 'FOLLOW-USER';
const UNFOLLOW_USER = 'UNFOLLOW-USER';
const SET_USERS = 'SET-USERS';
const SET_USERS_PAGE = 'SET-USERS-PAGE';
const SET_USERS_TOTAL = 'SET-USERS-TOTAL';


const initialState = {
  users: [],
  usersCount: 5,
  usersPage: 1,
  usersTotal: 0,
};

export const followUserCreator = (userId) => ({
  type: FOLLOW_USER,
  userId
});

export const unfollowUserCreator = (userId) => ({
  type: UNFOLLOW_USER,
  userId
});

export const setUsersCreator = (newUsers) => ({type: SET_USERS, newUsers});

export const setUsersPageCreator = (page) => ({type: SET_USERS_PAGE, page});

export const setUsersTotalCreator = (usersTotal) => ({type: SET_USERS_TOTAL, usersTotal});

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
    default:
      return state;
  }
};

export default usersReducer;