import {compose} from "redux";
import Login from "./Login";
import {login} from "../../redux/authReducer";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
  return {isAuth: state.auth.isAuth};
};

export default compose(
  connect(
    mapStateToProps,
    {login})
)(Login);