import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Login } from "./pages/register-login/Login";
import { Register } from "./pages/register-login/Register";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
