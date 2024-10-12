import { Link, useNavigate } from "react-router-dom";
import styles from "./login.module.css";
import { FaEyeSlash } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";
import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { validationLoginSchema } from "../validSchema";

function Login() {
  const [see, setsee] = useState("none");
  const [dontsee, setdontsee] = useState("inline");
  const [passtype, settype] = useState("password");
  const [userState, setUserState] = useState(false);
  const navigate = useNavigate();

  function seepass() {
    if (see === "none") {
      settype("text");
      setsee("inline");
      setdontsee("none");
    } else {
      settype("password");
      setsee("none");
      setdontsee("inline");
    }
  }

  return (
    <div className={styles.maincontainer}>
      <h1 className={styles.tittle}>Login</h1>
      <Formik
        initialValues={{ username: "", password: "" }}
        validationSchema={validationLoginSchema}
        onSubmit={(values) => {
          if (
            localStorage.getItem("password") === values.password &&
            localStorage.getItem("username") === values.username
          ) {
            console.log(values.username);
            console.log(values.password);
            localStorage.setItem("key", "1oso93nxc8h3cscd3c8cnksb83c");
            navigate("/board");
          } else {
            setUserState(true);
          }
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <div>
              <Field
                type="text"
                name="username"
                placeholder="Username"
                className={styles.usernameinput}
              />
              <ErrorMessage
                name="username"
                component="div"
                className={styles.error}
              />
            </div>
            <div>
              <Field
                type={passtype}
                name="password"
                placeholder="Password"
                className={styles.passinput}
              />
              <ErrorMessage
                name="password"
                component="div"
                className={styles.error}
              />
              <FaEyeSlash
                style={{ display: dontsee }}
                className={styles.eye}
                onClick={seepass}
              />
              <IoEyeSharp
                style={{ display: see }}
                className={styles.eye}
                onClick={seepass}
              />
            </div>
            {userState && (
              <p style={{ color: "red" }}>userName or password Incorrect</p>
            )}
            <div className={styles.wrapper}>
              <Link to={"/"} className={styles.forgotpass}>
                Forgot password
              </Link>
              <label htmlFor="remember" className={styles.remember}>
                Remember Me
                <Field
                  type="checkbox"
                  name="remember"
                  id="remember"
                  className={styles.check}
                />
              </label>
            </div>
            <button type="submit" className={styles.subinput}>
              Submit
            </button>
            <Link to={"/"} className={styles.register}>
              Register
            </Link>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default Login;
