import Login from "./login/login";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Register from "./registration/register";
import Layout from "./main/layout";
function App() {
  const keyLogin = localStorage.getItem("key");
  return (
    <>
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route
          path="/Board"
          element={keyLogin === "1oso93nxc8h3cscd3c8cnksb83c" && <Layout />}
        />
        <Route path="/" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
