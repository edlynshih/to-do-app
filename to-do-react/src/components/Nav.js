import { useNavigate } from "react-router-dom";
import logo from "../images/logo.png";
import '../styles/nav.sass';


const Nav = () => {

  const navigate = useNavigate();
  return (
    <nav>
      <div className="logo-container">
        <img src={logo} alt="logo"/>
      </div>
      <div className="controls-container">
        <span className="icon" onClick={() => navigate('/task')}>+</span>
        <span className="icon"  onClick={() => navigate('/')}>≡</span>
      </div>
    </nav>
  )
}

export default Nav;