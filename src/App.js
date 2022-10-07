import { Routes, Route, Link } from "react-router-dom";
import Signin from './components/Signin'
import Signup from './components/Signup'
import Account from './components/Account'
import AuthContextProvider from "./contexts/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <div className="App px-3">
      <h1 className="text-center">Firebase Auth</h1>
      <AuthContextProvider>
        <Routes>
          <Route exact path="/" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/account" element={<ProtectedRoute><Account /></ProtectedRoute>} />
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
