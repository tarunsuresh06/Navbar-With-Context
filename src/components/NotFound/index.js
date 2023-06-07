import './index.css'

import ThemeContext from '../../context/ThemeContext'

import Navbar from '../Navbar'

const NotFound = () => (
  <>
    <Navbar />
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value

        const themeClass = isDarkTheme && 'dark'

        return (
          <div className={`not-found-bg-container ${themeClass}`}>
            <img
              className="not-found-img"
              src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
              alt="not found"
            />
            <h1>Lost Your Way?</h1>
            <p>we cannot seem to find the page you are looking for.</p>
          </div>
        )
      }}
    </ThemeContext.Consumer>
  </>
)

export default NotFound
