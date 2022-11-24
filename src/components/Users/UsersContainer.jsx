import {
  getUsers, followUser, unfollowUser
} from "../../redux/usersReducer";
import Users from "./Users";
import {connect} from "react-redux";
import React from "react";
import {compose} from "redux";


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
    ...state.usersPage
  };
};


// TODO Change connect for hooks
export default compose(
  connect(mapStateToProps, {
    getUsers,
    followUser,
    unfollowUser,
  })
)(UsersAPIContainer);