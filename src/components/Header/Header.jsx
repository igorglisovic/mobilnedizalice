import classes from './Header.module.css'
import { NavLink, Link } from 'react-router-dom'

import logo from '../../assets/logo.png'

const Header = () => {
  return (
    <header>
      <div className={classes.logo}>
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
      </div>
      <nav>
        <ul>
          <li>
            <NavLink activeclassname="active" to="/">
              Početna
            </NavLink>
          </li>
          <li>
            <NavLink to="/proizvodi">Proizvodi</NavLink>
          </li>
          <li>
            <NavLink to="/galerija">Galerija</NavLink>
          </li>
          <li>
            <NavLink to="/reference">Reference</NavLink>
          </li>
          <li>
            <NavLink to="/onama">O nama</NavLink>
          </li>
          <li>
            <NavLink className={classes.kontakt} to="/kontakt">
              Kontakt
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
