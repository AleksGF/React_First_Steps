import {connect} from "react-redux";
import {getCurrentUser, logout} from "../../redux/authReducer";
import Header from "./Header";
import {compose} from "redux";


const mapStateToProps = (state) => {
  return {login: state.auth.login};
};

// TODO Change connect for hooks
export default compose(
  connect(mapStateToProps, {
    logout,
  })
)(Header);


