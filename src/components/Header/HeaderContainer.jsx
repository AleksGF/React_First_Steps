import {connect} from "react-redux";
import {getCurrentUser} from "../../redux/authReducer";
import HeaderAPIContainer from "./HeaderAPIContainer";

const mapStateToProps = (state) => {
  return {...state.auth};
};

// TODO Change connect for hooks
const HeaderContainer = connect(mapStateToProps, {
  getCurrentUser,
})(HeaderAPIContainer);

export default HeaderContainer;


