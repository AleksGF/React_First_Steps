import Header from "./Header";
import {useEffect} from "react";
import {authAPI} from "../../api/authAPI";


const HeaderAPIContainer = (props) => {
  const setIsFetching = props.setIsFetching;
  const setCurrentUser = props.setCurrentUser;
  const setIsAuth = props.setIsAuth;

  useEffect(() => {
    setIsFetching(true);
    authAPI.getCurrentUser()
      .then(data => {
        if (data?.id) {
          setCurrentUser(data.id, data.login, data.email);
          setIsAuth(true);
        }
        setIsFetching(false);
      });
  }, [setIsFetching, setCurrentUser, setIsAuth]);

  return (
    <Header {...props}/>
  );
}

export default HeaderAPIContainer;