import { NavLink } from 'react-router-dom'
import classes from './HamburgerMenu.module.css'

const HamburgerMenu = () => {
  return (
    <nav className={classes['hamburger-menu']}>
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
  )
}

export default HamburgerMenu
