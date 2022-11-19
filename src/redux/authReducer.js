const SET_CURRENT_USER = 'SET-CURRENT-USER';
const SET_IS_AUTH = 'SET-IS-AUTH';
const SET_IS_FETCHING = 'SET-IS-FETCHING';

const initialState = {
  userId: null,
  login: null,
  email: null,
  isAuth: false,
  isFetching: false,
};

export const setCurrentUser = (userId, login, email) => ({
  type: SET_CURRENT_USER,
  user: {userId, login, email}
});

export const setIsAuth = (isAuth) => ({type: SET_IS_AUTH, isAuth});

export const setIsFetching = (isFetching) => ({type: SET_IS_FETCHING, isFetching});

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        userId: action.user.userId,
        login: action.user.login,
        email: action.user.email,
      };
    case SET_IS_AUTH:
      return {
        ...state,
        isAuth: action.isAuth
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

export default authReducer;