import {
  followUserCreator,
  unfollowUserCreator,
  setUsersCreator,
  setUsersPageCreator,
  setUsersTotalCreator
} from "../../redux/usersReducer";
import Users from "./Users";
import {connect} from "react-redux";
import React from "react";
import axios from "axios";

class UsersAPIContainer extends React.Component {
  componentDidMount() {
    axios.get(
      `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.usersPage}&count=${this.props.usersCount}`
    ).then(resp => {
      this.props.setUsers(resp.data.items);
      this.props.setUsersTotal(resp.data.totalCount);
    });
  }

  onChangePage(page) {
    axios.get(
      `https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.usersCount}`
    ).then(resp => {
      this.props.setUsers(resp.data.items);
    });
    this.props.setUsersPage(page);
  };

  render() {
    return (
      <Users
        usersTotal={this.props.usersTotal}
        usersCount={this.props.usersCount}
        usersPage={this.props.usersPage}
        users={this.props.users}
        onChangePage={this.onChangePage.bind(this)}
        onFollowUser={this.props.onFollowUser}
        onUnfollowUser={this.props.onUnfollowUser}
      />);
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    usersCount: state.usersPage.usersCount,
    usersPage: state.usersPage.usersPage,
    usersTotal: state.usersPage.usersTotal,
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
    setUsersPage: (page) => {
      dispatch(setUsersPageCreator(page))
    },
    setUsersTotal: (usersTotal) => {
      dispatch(setUsersTotalCreator(usersTotal))
    }
  };
};
// TODO Change connect for hooks
const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIContainer);

export default UsersContainer;