import { Link } from "react-router-dom";
import styles from "./login.module.css";
import { FaEyeSlash } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";
import { useState } from "react";
function Login() {
  const [username, setusername] = useState(null);
  const [pass, setpass] = useState(null);
  const [see, setsee] = useState("none");
  const [dontsee, setdontsee] = useState("inline");
  const [passtype, settype] = useState("password");
  function seepass() {
    if (see == "none") {
      settype("text");
      setsee("inline");
      setdontsee("none");
    } else {
      settype("password");
      setsee("none");
      setdontsee("inline");
    }
  }
  function submithandler(e) {
    e.preventDefault();
    console.log(username);
    console.log(pass);
  }
  return (
    <div className={styles.maincontainer}>
      <h1 className={styles.tittle}>Login</h1>
      <form>
        <input
          type="text"
          placeholder="Username"
          className={styles.usernameinput}
          onChange={(e) => {
            setusername(e.target.value);
          }}
        />
        <div>
          <input
            type={passtype}
            placeholder="password"
            className={styles.passinput}
            onChange={(e) => {
              setpass(e.target.value);
            }}
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

        <div className={styles.wrapper}>
          <Link to={"/"} className={styles.forgotpass}>
            Forgot password
          </Link>
          <label htmlFor="remember" className={styles.remember}>
            Remember Me
            <input
              type="checkbox"
              name="remember"
              id="remember"
              className={styles.check}
            />
          </label>
        </div>
        <input
          type="submit"
          value="Submit"
          className={styles.subinput}
          onClick={submithandler}
        />
        <Link to={"/Register"} className={styles.register}>
          {" "}
          Register{" "}
        </Link>
      </form>
    </div>
  );
}

export default Login;
