import {useLocation} from "react-router-dom";
import {Form, Field} from "react-final-form";
import styles from './Login.module.css';

const Login = () => {
  const location = useLocation();

  const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

  const onSubmit = async values => {
    await sleep(2000);
    alert(JSON.stringify(values));
  };

  const getValidator = values => {
    const errors={};
    if (!values.login) {
      errors.login = 'Login is required!'
    }
    if (!values.password) {
      errors.password = 'Password is required!'
    }
    return errors;
  };

  return (
    <Form
      onSubmit={onSubmit}
      validate={getValidator}
      render={({handleSubmit, submitting}) => (
        <form onSubmit={handleSubmit} className={styles.login_form}>
          <Field name={'login'}>
            {({input, meta}) => (
              <div>
              <label>Login</label>
                <input {...input} type={'text'}/>
                {meta.error && meta.touched && <div className={styles.error_msg}>{meta.error}</div>}
              </div>
            )}
          </Field>
          <Field name={'password'}>
            {({input, meta}) => (
              <div>
                <label>Password</label>
                <input {...input} type={'password'}/>
                {meta.error && meta.touched && <div className={styles.error_msg}>{meta.error}</div>}
              </div>)}
          </Field>
          <Field name={'rememberMe'} initialValue={true}>
            {({input}) => (
              <div>
                <label>Remember me</label>
                <input {...input} type={'checkbox'}/>
              </div>
            )}
          </Field>
        <div>
          <button type={'submit'} className={styles.login_button} disabled={submitting}>Login</button>
        </div>
        <p>You came from: {location.state?.from?.pathname || '/'}</p>
        </form>
      )}
    />
  );
};

export default Login;