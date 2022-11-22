import {Navigate, useLocation} from "react-router-dom";
import {connect} from "react-redux";


const mapStateToProps = (state) => {
  return {isAuth: state.auth.isAuth};
};

const withAuthRedirect = (Component) => {
  let WrappedComponent = (props) => {
    const location = useLocation();

    if (!props.isAuth) {
      return <Navigate to={'/login'} state={{from: location}}/>
    }

    return <Component {...props}/>;
  };

  return connect(mapStateToProps, {})(WrappedComponent);
};

export default withAuthRedirect;