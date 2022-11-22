import {connect} from "react-redux";
import PersonalDataAPIContainer from "./PesonalDataAPIContainer";
import {getUserById} from "../../../redux/profileReducer";

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
  {getUserById})(PersonalDataAPIContainer);

export default PersonalDataContainer;