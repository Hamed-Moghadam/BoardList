import Login from "./login/login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./registration/register";
function App() {
  return (
    <> 
      <Routes>
        <Route path="/Register" element={<Register />} />
        <Route path="/" element={<Login />} />

      </Routes>
    </>
  );
}

export default App;
