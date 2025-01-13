import './App.css';
import Welcome from './components/Pages/Welcom/Welcome.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Pages/login/Login.js';
import Home from './components/Pages/Home/Home.js'

function App() {
  return (
    <div>
      <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
    </div>
  
  );
}

export default App;
