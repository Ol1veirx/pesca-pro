import "./Header.css";
import pescaproLogo from '../../assets/pescapro-logo.png'

function Header() {
  return (
    <>
      <div className="content-header">
        <div className="content-left">
          <img src={pescaproLogo}></img>
        </div>

        <div className="content-center">
          <ul>
            <li>
              <a>Torneios</a>
            </li>

            <li>
              <a>Sobre Nós</a>
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
