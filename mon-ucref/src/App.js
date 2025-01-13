import './App.css';
import Welcome from './components/Pages/Welcom/Welcome.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Pages/login/Login.js';
import CreateAccount from './components/Pages/Home/Home.js'


function App() {
  return (
    <div>
      <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/home" element={<Home />} />
        <Route path="/create" element={<CreateAccount />} />
      </Routes>
    </Router>
    </div>
  
  );
}

export default App;
