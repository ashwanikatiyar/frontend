//src/App.js
import React  from "react";
import { BrowserRouter as Router, Route, Routes, Navigate  } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import Homepage from "./components/Home/Homepage";
import SuspenseLoader from "./components/common/SuspenseLoader";
import { AuthProvider } from "./context/AuthContext";


function App() {
  
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<SuspenseLoader component={LoginPage} />} />
          <Route path="/signup" element={<SuspenseLoader component={SignupPage} />} />
          <Route path="/home" element={<SuspenseLoader component={Homepage} />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;


