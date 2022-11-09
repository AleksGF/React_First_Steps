import {combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer";
import dialoguesReducer from "./dialoguesReducer";


const reducers = combineReducers({
  profilePage: profileReducer,
  dialoguesPage: dialoguesReducer,
});

const store = createStore(reducers);

export default store;