import {
  requestUsers, followUser, unfollowUser
} from "../../redux/usersReducer";
import Users from "./Users";
import {connect} from "react-redux";
import React from "react";
import {compose} from "redux";
import {
  getIsFetching,
  getUsers,
  getUsersCount,
  getUsersFollowingInProgressFor,
  getUsersPage,
  getUsersTotal
} from "../../redux/usersSelectors";

// TODO refactor for function
class UsersAPIContainer extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.usersPage, this.props.usersCount);
  }

  onChangePage(page) {
    this.props.getUsers(page, this.props.usersCount);
  };

  onFollowUser(userId) {
    this.props.followUser(userId);
  };

  onUnfollowUser(userId) {
    this.props.unfollowUser(userId);
  };

  render() {
    return (
      <Users
        {...this.props}
        onChangePage={this.onChangePage.bind(this)}
        onFollowUser={this.onFollowUser.bind(this)}
        onUnfollowUser={this.onUnfollowUser.bind(this)}
      />);
  }
}

const mapStateToProps = (state) => {
  return {
    users: getUsers(state),
    usersCount: getUsersCount(state),
    usersPage: getUsersPage(state),
    usersTotal: getUsersTotal(state),
    isFetching: getIsFetching(state),
    usersFollowingInProgressFor: getUsersFollowingInProgressFor(state),
  };
};


// TODO Change connect for hooks
export default compose(
  connect(mapStateToProps, {
    getUsers: requestUsers,
    followUser,
    unfollowUser,
  })
)(UsersAPIContainer);