import {authAPI} from "../api/authAPI";

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


export const getCurrentUser = () => {
  return dispatch => {
    return authAPI.getCurrentUser()
      .then(data => {
        if (data?.id) {
          dispatch(setCurrentUser(data.id, data.login, data.email));
          dispatch(setIsAuth(true));
        }
      });
  };
};

export const login = (email, password, rememberMe) => {
  return async dispatch => {
    dispatch(setIsFetching(true));
    let res = await authAPI.login(email, password, rememberMe);
    dispatch(setIsFetching(false));

    if (res.resultCode === 0) {
      dispatch(getCurrentUser());
    } else {
      dispatch(setIsFetching(false));
      return res.messages[0];
    }
  };
}

export const logout = () => {
  return dispatch => {
    dispatch(setIsFetching(true));
    authAPI.logout()
      .then(data => {
        if (data?.resultCode === 0) {
          dispatch(setCurrentUser(null, null, null));
          dispatch(setIsAuth(false));
        }
        dispatch(setIsFetching(false));
      });
  };
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        userId: action.user.userId,
        login: action.user.login,
        email: action.user.email,
        isAuth: true
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