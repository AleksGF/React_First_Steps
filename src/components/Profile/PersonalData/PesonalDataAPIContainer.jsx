import PersonalData from "./PersonalData";
import {useParams} from "react-router-dom";
import {useEffect} from "react";


const PersonalDataAPIContainer = (props) => {
  const userId = useParams().userId;
  const getUserById = props.getUserById;

  useEffect(() => {
    if (userId) {
      getUserById(userId);
    }
  }, [userId, getUserById]);

  return <PersonalData {...props}/>;
};

export default PersonalDataAPIContainer;