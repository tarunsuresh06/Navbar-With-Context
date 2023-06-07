import './index.css'
import {Link} from 'react-router-dom'

import ThemeContext from '../../context/ThemeContext'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value

      const theme = isDarkTheme ? 'dark' : 'light'
      const iconTheme = isDarkTheme ? 'light' : 'dark'

      return (
        <nav className={`nav-bar nav-${theme}`}>
          <img
            className="nav-logo"
            src={`https://assets.ccbp.in/frontend/react-js/website-logo-${theme}-theme-img.png`}
            alt="website logo"
          />

          <ul className="nav-list">
            <li className="nav-item">
              <Link className={`nav-link-${theme}`} to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link-${theme}`} to="/about">
                About
              </Link>
            </li>
          </ul>

          <button
            className="btn"
            type="button"
            onClick={toggleTheme}
            data-testid="theme"
          >
            <img
              className="nav-icon"
              src={`https://assets.ccbp.in/frontend/react-js/${iconTheme}-theme-img.png`}
              alt="theme"
            />
          </button>
        </nav>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar
