import {combineReducers, createStore, applyMiddleware} from "redux";
import thunkMiddleware from "redux-thunk";
import profileReducer from "./profileReducer";
import dialoguesReducer from "./dialoguesReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";
import appReducer from "./appReducer";



const reducers = combineReducers({
  profilePage: profileReducer,
  dialoguesPage: dialoguesReducer,
  usersPage: usersReducer,
  auth: authReducer,
  app: appReducer,
});
// TODO Change ReduxCreate for ReduxConfigure
const store = createStore(reducers, applyMiddleware(thunkMiddleware));
window.store = store;
export default store;