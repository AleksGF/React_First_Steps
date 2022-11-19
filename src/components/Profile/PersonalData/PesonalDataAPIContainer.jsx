import PersonalData from "./PersonalData";
import {useParams} from "react-router-dom";
import {useEffect} from "react";
import {usersAPI} from "../../../api/usersAPI";

const PersonalDataAPIContainer = (props) => {
  const userId = useParams().userId;
  const setIsFetching = props.setIsFetching;
  const setUserId = props.setUserId;
  const setUser = props.setUser;

  useEffect(() => {
    if (userId) {
      setIsFetching(true);
      setUserId(userId);
      usersAPI.getUser(userId)
        .then(data => {
          setUser(data);
          setIsFetching(false);
        });
    }
  }, [userId, setIsFetching, setUserId, setUser]);

  return <PersonalData {...props}/>;
};

export default PersonalDataAPIContainer;