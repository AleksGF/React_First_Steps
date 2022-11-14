import UserItem from "./UserItem/UserItem";
import styles from "./Users.module.css";

const Users = (props) => {
  const pagesCount = Math.ceil(props.usersTotal / props.usersCount);
  //TODO improve pagination
  const pagination = [];

  for (let i = 1; i <= pagesCount; i++) {
    if (i === 1 || i === pagesCount || (i > props.usersPage - 3 && i < props.usersPage + 3)) {
      pagination.push(<span
        key={i}
        className={props.usersPage === i ? styles.activePage : ""}
        onClick={() => props.onChangePage(i)}
      > {i} </span>)
    }
  }

  return (
      <div className={styles.users_wrapper}>
      {
        props.users.map(user => <UserItem
          key={user.id}
          user={user}
          onFollowUser={props.onFollowUser}
          onUnfollowUser={props.onUnfollowUser}
        />)
      }
      <div className={styles.pagination}>{pagination}</div>
    </div>
  );
};

export default Users;