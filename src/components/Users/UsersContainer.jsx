import {
  followUser,
  unfollowUser,
  setUsers,
  setUsersPage,
  setUsersTotal,
  setIsFetching
} from "../../redux/usersReducer";
import Users from "./Users";
import {connect} from "react-redux";
import React from "react";
import {usersAPI} from "../../api/usersAPI";

class UsersAPIContainer extends React.Component {
  componentDidMount() {
    this.props.setIsFetching(true);
    usersAPI.getUsers(this.props.usersPage, this.props.usersCount)
      .then(data => {
        this.props.setUsers(data.items);
        this.props.setUsersTotal(data.totalCount);
        this.props.setIsFetching(false);
      });
  }

  onChangePage(page) {
    this.props.setIsFetching(true);
    usersAPI.getUsers(page, this.props.usersCount)
      .then(data => {
        this.props.setUsers(data.items);
        this.props.setIsFetching(false);
      });
    this.props.setUsersPage(page);
  };

  onFollowUser(userId) {
    usersAPI.setFollowUser(userId)
      .then(data => {
        if (data.resultCode === 0) {
          this.props.followUser(userId);
        } else {
          throw new Error(`Error: ${data?.messages}`);
        }
      });
  };

  onUnfollowUser(userId) {
    usersAPI.setUnfollowUser(userId)
      .then(data => {
        if (data.resultCode === 0) {
          this.props.unfollowUser(userId);
        } else {
          throw new Error(`Error: ${data?.messages}`);
        }
      });
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
const UsersContainer = connect(mapStateToProps, {
  followUser, unfollowUser, setUsers, setUsersPage, setUsersTotal, setIsFetching
})(UsersAPIContainer);

export default UsersContainer;