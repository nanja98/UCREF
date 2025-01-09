import './ButtonStart.css'
import { Link } from 'react-router-dom';

function ButtonStart(){
        return (
          <div>
          <Link to="/home">
            <button>START</button>
          </Link>
        </div>
        );

}
export default ButtonStart;