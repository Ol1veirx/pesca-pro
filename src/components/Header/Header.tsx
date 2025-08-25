import "./Header.css";
import pescaproLogo from '../../assets/pescapro-logo.png'
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <>
      <div className="content-header">
        <div className="content-left">
          <NavLink to="/">
            <img src={pescaproLogo}></img>
          </NavLink>
        </div>

        <div className="content-center">
          <ul>
            <li>
              <NavLink to="/tournements" className="nav-link">Torneios</NavLink>
            </li>

            <li>
              <NavLink to="/" className="nav-link">Sobre Nós</NavLink>
            </li>
          </ul>
        </div>

        <div className="content-right">
          <button>Cadastrar Torneio</button>
        </div>
      </div>
    </>
  );
}

export default Header;
