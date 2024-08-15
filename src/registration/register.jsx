import { Link } from "react-router-dom";
import styles from "./register.module.css";
import { useState } from "react";
function Register() {
  const [email, setemail] = useState();
  const [username, setusername] = useState();
  const [pass, setpass] = useState();
  function submithandler(e) {
    e.preventDefault();
    console.log(username);
    console.log(pass);
    console.log(email);
  }
  return (
    <div className={styles.maincontainer}>
      <h1 style={{ color: "#fff" }}>Register</h1>
      <form>
        <input
          type="email"
          placeholder="Email"
          className={styles.input}
          onChange={(e) => setemail(e.target.value)}
        />
        <input
          type="text"
          placeholder="username"
          className={styles.input}
          onChange={(e) => setusername(e.target.value)}
        />
        <input
          type="text"
          placeholder="password"
          className={styles.input}
          onChange={(e) => setpass(e.target.value)}
        />
        <input
          type="submit"
          value="Submit"
          className={styles.submit}
          onClick={submithandler}
        />
        <Link to={"/"} style={{ color: "#fff" }}>
          Login
        </Link>
      </form>
    </div>
  );
}

export default Register;
