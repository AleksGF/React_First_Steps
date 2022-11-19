import {combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer";
import dialoguesReducer from "./dialoguesReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";


const reducers = combineReducers({
  profilePage: profileReducer,
  dialoguesPage: dialoguesReducer,
  usersPage: usersReducer,
  auth: authReducer,
});
// TODO Change ReduxCreate for ReduxConfigure
const store = createStore(reducers);

export default store;