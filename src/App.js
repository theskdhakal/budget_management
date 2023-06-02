import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Login } from "./pages/register-login/Login";
import { Register } from "./pages/register-login/Register";
import { MainLayout } from "./components/layout/MainLayout";

function App() {
  return (
    <div>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </MainLayout>
    </div>
  );
}

export default App;
