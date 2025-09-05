import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

// ZONE PUBLIC
import Home from "./zonePublic/Home";

// ZONE AUTH
import Login from "./zoneAuth/Login";
import Passwordreset from "./zoneAuth/Passwordreset";
import Register from "./zoneAuth/Register";

// ZONE CLIENT
import Dashboard from "./zoneClient/Dashboard";
import Profile from "./zoneClient/Profile";

// Layouts
import PublicLayout from "./layouts/PublicLayout";
import ClientLayout from "./layouts/ClientLayout";
import AuthRoute from "./middleware/AuthRoute";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/passwordreset" element={<Passwordreset />} />
        <Route path="/" element={<PublicLayout />}>
          <Route index element={<Home />} />
        </Route>
        <Route
          path="/dashboard"
          element={
            <AuthRoute>
              <ClientLayout />
            </AuthRoute>
          }
        >
          <Route index element={<Dashboard />} />
          <Route path="profile" element={<Profile />} />
          {/* Ajoutez d'autres routes de tableau de bord ici */}
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
