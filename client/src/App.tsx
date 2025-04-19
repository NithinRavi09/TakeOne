import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Landing from "./pages/Landing";

function App() {
  const isAuthenticated = !!localStorage.getItem('token');

  return (
    <Routes>
      
      <Route path="/" element={isAuthenticated ? <Navigate to="/home"/> : <Navigate to="/landing"/>} />
      <Route path="/landing" element={<Landing/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<Signup/>}/>
    </Routes>
  );
}

export default App;
