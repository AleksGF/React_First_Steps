import React from "react";
import axios from "axios";
import UserItem from "./UserItem/UserItem";
import styles from "./Users.module.css";


class Users extends React.Component {
  componentDidMount() {
    axios.get('https://social-network.samuraijs.com/api/1.0/users')
      .then(resp => this.props.setUsers(resp.data.items));
  }

  render() {
    return (
      <div className={styles.users_wrapper}>
        {
          this.props.users.map(user => <UserItem
            key={user.id}
            user={user}
            onFollowUser={this.props.onFollowUser}
            onUnfollowUser={this.props.onUnfollowUser}
          />)
        }
        <button className={styles.add_users_button}
        onClick={() => this.props.setUsers([])}
        >Add more users</button>
      </div>);
  }
};

export default Users;