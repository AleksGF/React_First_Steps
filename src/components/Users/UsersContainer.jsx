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
    this.props.setIsFetching(true);
    axios.get(
      `https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.usersCount}`
    ).then(resp => {
      this.props.setUsers(resp.data.items);
      this.props.setIsFetching(false);
    });
    this.props.setUsersPage(page);
  };

  render() {
    return (
      <Users
        {...this.props}
        onChangePage={this.onChangePage.bind(this)}
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