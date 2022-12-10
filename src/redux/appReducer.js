import {getCurrentUser} from "./authReducer";

const INICIALIZE_APP = 'INICIALIZE-APP';

const initialState = {
  initializationSuccess: false,
};

export const setInitializationSuccess = (initializationSuccess) => ({type: INICIALIZE_APP, initializationSuccess});

export const inicialize = () => {
  return dispatch => {
    Promise.all([
      dispatch (getCurrentUser())
    ]).then(() => {dispatch (setInitializationSuccess(true));})
  };
};


const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case INICIALIZE_APP:
      return {
        ...state,
        initializationSuccess: action.initializationSuccess
      };
    default:
      return state;
  }
};

export default appReducer;