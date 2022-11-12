import {followUserCreator, unfollowUserCreator, setUsersCreator} from "../../redux/usersReducer";
import Users from "./Users";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFollowUser: (userId) => {
      dispatch(followUserCreator(userId))
    },
    onUnfollowUser: (userId) => {
      dispatch(unfollowUserCreator(userId))
    },
    setUsers: (newUsers) => {
      dispatch(setUsersCreator(newUsers))
    },
  };
};
// TODO Change connect for hooks
const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;