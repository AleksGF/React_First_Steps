import {connect} from "react-redux";
import {setCurrentUser, setIsAuth, setIsFetching} from "../../redux/authReducer";
import HeaderAPIContainer from "./HeaderAPIContainer";

const mapStateToProps = (state) => {
  return {...state.auth};
};

// TODO Change connect for hooks
const HeaderContainer = connect(mapStateToProps, {
  setCurrentUser, setIsAuth, setIsFetching,
})(HeaderAPIContainer);

export default HeaderContainer;


