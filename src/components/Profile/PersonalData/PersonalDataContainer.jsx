import {connect} from "react-redux";
import PersonalDataAPIContainer from "./PesonalDataAPIContainer";
import {getUserById} from "../../../redux/profileReducer";
import {compose} from "redux";
import withAuthRedirect from "../../../hoc/withAuthRedirect";

const mapStateToProps = (state) => {
  return {
    user: {...state.profilePage.user},
    userId: state.profilePage.userId,
    isFetching: state.profilePage.isFetching,
    currentUser: state.auth.userId,
  };
};

// TODO Change connect for hooks
export default compose(
  connect(
    mapStateToProps,
    {getUserById}),
  withAuthRedirect
)(PersonalDataAPIContainer);