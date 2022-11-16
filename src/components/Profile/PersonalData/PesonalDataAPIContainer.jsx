import PersonalData from "./PersonalData";
import {useParams} from "react-router-dom";
import {useEffect} from "react";
import axios from "axios";

const PersonalDataAPIContainer = (props) => {
  const userId = useParams().userId;

  useEffect(()=>{
    if (userId) {
      props.setIsFetching(true);
      props.setUserId(userId);
      axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
        .then(resp => {
          props.setUser(resp.data);
          props.setIsFetching(false);
        });
    }
  },[userId]);

  return <PersonalData {...props}/>;
};

export default PersonalDataAPIContainer;