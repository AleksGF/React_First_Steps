import styles from "./UserStatus.module.css";
import {useEffect, useState} from "react";


const UserStatus = (props) => {
  let [status, setStatus] = useState(props.userStatus);
  let [isEditMode, setEditMode] = useState(false);

  const statusFromProps = props.userStatus;

  const userId = props.userId;
  const getUserStatus = props.getUserStatus;

  // getting user`s status every time when userId changed
  useEffect(() => {
    if (userId) {
      getUserStatus(userId);
    }
  }, [userId, getUserStatus]);

  // setting status to local state every time it changed in props
  useEffect(() => {
    setStatus(statusFromProps);
  }, [statusFromProps]);

  const changeEditMode = () => {
    setEditMode(true);
  };

  const changeText = (event) => {
    setStatus(event.currentTarget.value);
  };

  const saveStatus = () => {
    props.putUserStatus(status);
    setEditMode(false);
  };

  return (
    <div className={styles.status_container}>
      {!isEditMode
        ? <div onDoubleClick={changeEditMode}>
          <span className={styles.colored_text}>Status: </span><span>{status}</span>
        </div>
        : <textarea autoFocus={true}
                    value={status}
                    onChange={changeText}
                    onBlur={saveStatus}
        />
      }
    </div>
  );
};

export default UserStatus;