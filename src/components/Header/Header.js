import logo from '../../images/logo.png'
import '../../styles/layouts/Header.scss'


const Header = () => {
    return (
        <header className="header">
        <p className="header__p">
          <i className="header__p--i fa-solid fa-laptop-code"></i>
          <span className="header__p--span">Proyectos y ya estaría</span>
        </p>
        <img className="header__img" src={logo} alt="" />
      </header>
    )
}

export default Header;