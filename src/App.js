import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Login } from "./pages/register-login/Login";
import { Register } from "./pages/register-login/Register";
import { ToastContainer } from "react-toastify";
import { Dashboard } from "./pages/dashboard/Dashboard";
import { Profile } from "./pages/profile/Profile";
import { PageNotFound } from "./pages/page-not-found/PageNotFound";
import { useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { autoLogin } from "./components/user/UserAction";
import { auth } from "./components/firebase/FirebaseConfig";
import { PrivateRoute } from "./components/private-route/PrivateRoute";

function App() {
  const dispatch = useDispatch();

  onAuthStateChanged(auth, (user) => {
    user?.uid && dispatch(autoLogin(user.uid));
  });
  return (
    <div>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
