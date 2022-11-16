import {connect} from "react-redux";
import PersonalDataAPIContainer from "./PesonalDataAPIContainer";
import {setUserId, setUser, setIsFetching} from "../../../redux/profileReducer";

const mapStateToProps = (state) => {
  return {
    user: {...state.profilePage.user},
    userId: state.profilePage.userId,
    isFetching: state.profilePage.isFetching,
  };
};

// TODO Change connect for hooks
const PersonalDataContainer = connect(
  mapStateToProps,
  {setUserId, setUser, setIsFetching})(PersonalDataAPIContainer);

export default PersonalDataContainer;