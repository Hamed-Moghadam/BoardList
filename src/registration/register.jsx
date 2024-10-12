import { Link, useNavigate } from "react-router-dom";
import styles from "./register.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { validationRegisterSchema } from "../validSchema";
function Register() {
  const router = useNavigate();

  return (
    <div className={styles.maincontainer}>
      <h1 style={{ color: "#fff" }}>Register</h1>
      <Formik
        initialValues={{ email: "", username: "", password: "" }}
        validationSchema={validationRegisterSchema}
        onSubmit={(values) => {
          localStorage.removeItem("username");
          localStorage.removeItem("password");
          localStorage.removeItem("E-mail");
          localStorage.removeItem("key");
          localStorage.setItem("username", values.username);
          localStorage.setItem("password", values.password);
          localStorage.setItem("E-mail", values.email);
          router("/Login");
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <div>
              <Field
                type="email"
                name="email"
                placeholder="Email"
                className={styles.input}
              />
              <ErrorMessage
                name="email"
                component="div"
                className={styles.error}
              />
            </div>
            <div>
              <Field
                type="text"
                name="username"
                placeholder="Username"
                className={styles.input}
              />
              <ErrorMessage
                name="username"
                component="div"
                className={styles.error}
              />
            </div>
            <div>
              <Field
                type="password"
                name="password"
                placeholder="Password"
                className={styles.input}
              />
              <ErrorMessage
                name="password"
                component="div"
                className={styles.error}
              />
            </div>
            <div>
              <button type="submit" className={styles.submit}>
                Submit
              </button>
            </div>
          </Form>
        )}
      </Formik>
      <Link to={"/Login"} style={{ color: "#fff" }}>
        Login
      </Link>
    </div>
  );
}

export default Register;
