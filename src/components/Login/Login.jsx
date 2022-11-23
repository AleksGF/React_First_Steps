import {useLocation} from "react-router-dom";

const Login = (props) => {
  const location = useLocation();
  return (
    <div>
      <p>Login form will be here soon</p>
      <p>You came from: {location.state?.from?.pathname || '/'}</p>
    </div>
  );
};

export default Login;