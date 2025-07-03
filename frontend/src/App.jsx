import { useEffect } from "react";
import "./App.css";
import { Route, Routes, Link, useLocation } from "react-router-dom";
import { OpenRoute } from "./Auth/OpenRoute";
import ProtectedRoute from "./Auth/ProtectedRoute";
import LoginSignupPage from "./pages/Login/LoginPage";
import SchoolERPLanding from "./pages/LandingPage/LandingPage";

import Dashboard from "./pages/Dashboard/Dashboard";

function App() {
  // Scroll to the top of the page when the component mounts

  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<SchoolERPLanding />} />

        {/* PAGE FOR NON LOGGED IN USER */}

        <Route
          path="/login"
          element={
            <OpenRoute>
              {/* <LoginSignupPage type="login" /> */}
              <Dashboard />
            </OpenRoute>
          }
        />

        <Route
          path="/signup"
          element={
            <OpenRoute>
              <LoginSignupPage type="registration" />
            </OpenRoute>
          }
        />

        {/* Protected Route */}
        <Route path="/dashboard" element={<ProtectedRoute></ProtectedRoute>} />
      </Routes>
    </>
  );
}

export default App;
