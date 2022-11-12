const FOLLOW_USER = 'FOLLOW-USER';
const UNFOLLOW_USER = 'UNFOLLOW-USER';
const SET_USERS = 'SET-USERS';

const initialState = {
  users: []
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

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW_USER:
      return {
        users: [...state.users].map(item => item.id === action.userId ? {...item, followed: true} : item)
      };
    case UNFOLLOW_USER:
      return {
        users: [...state.users].map(item => item.id === action.userId ? {...item, followed: false} : item)
      };
    case SET_USERS:
      return {
        users: action.newUsers
      };
    default:
      return state;
  }
};

export default usersReducer;