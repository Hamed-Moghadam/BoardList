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
  return (
    <>
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/board" element={<Layout />} />
        <Route path="/" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
