import Header from "./Header";
import {useEffect} from "react";

const HeaderAPIContainer = (props) => {
  const getCurrentUser = props.getCurrentUser;

  useEffect(() => {
    getCurrentUser();
  }, [getCurrentUser]);

  return (
    <Header {...props}/>
  );
}

export default HeaderAPIContainer;