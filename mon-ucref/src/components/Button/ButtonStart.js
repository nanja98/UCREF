import './ButtonStart.css'
import Home from '../Pages/Home/Home'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function ButtonStart(){
        return (
          <Router>
            <div>
              <Link to="/home">
                <button>START</button>
              </Link>
      
              <Routes>
                <Route path="/home" element={<Home />} />
              </Routes>
            </div>
          </Router>
        );

}
export default ButtonStart;