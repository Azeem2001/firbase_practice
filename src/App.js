import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Logout from "./components/Logout/Logout";
import Home from "./pages/home/Home";
import Rigester from "./pages/rigester/Rigester";
import Login from "./pages/Login/Login";


function App() {
  return (
    <div className="App">
      <Router>
        <Logout />
        <Routes>
          <Route path="/rigester" element={<Rigester />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
