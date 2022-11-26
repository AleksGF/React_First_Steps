import {compose} from "redux";
import {connect} from "react-redux";
import {getUserStatus, putUserStatus} from "../../../../redux/profileReducer";
import UserStatus from "./UserStatus";


const mapStateToProps = (state) => {
  return {
    userId: state.profilePage.user.userId,
    userStatus: state.profilePage.userStatus,
  };
};

// TODO Change connect for hooks
export default compose(
  connect(
    mapStateToProps,
    {getUserStatus, putUserStatus})
)(UserStatus);