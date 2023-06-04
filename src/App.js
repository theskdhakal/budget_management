import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Login } from "./pages/register-login/Login";
import { Register } from "./pages/register-login/Register";
import { MainLayout } from "./components/layout/MainLayout";
import { ToastContainer } from "react-toastify";
import { Dashboard } from "./pages/dashboard/Dashboard";
import { Profile } from "./pages/profile/Profile";

function App() {
  return (
    <div>
      <MainLayout>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </MainLayout>
      <ToastContainer />
    </div>
  );
}

export default App;
