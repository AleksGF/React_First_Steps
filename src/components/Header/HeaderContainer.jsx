import {connect} from "react-redux";
import {getCurrentUser} from "../../redux/authReducer";
import HeaderAPIContainer from "./HeaderAPIContainer";
import {compose} from "redux";


const mapStateToProps = (state) => {
  return {...state.auth};
};

// TODO Change connect for hooks
export default compose(
  connect(mapStateToProps, {
    getCurrentUser,
  })
)(HeaderAPIContainer);


