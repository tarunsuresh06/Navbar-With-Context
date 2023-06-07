import './index.css'

import Navbar from '../Navbar'
import ThemeContext from '../../context/ThemeContext'

const About = () => (
  <>
    <Navbar />
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value

        const imageUrl = isDarkTheme
          ? 'https://assets.ccbp.in/frontend/react-js/about-dark-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/about-light-img.png'

        const themeClass = isDarkTheme && 'dark'

        return (
          <div className={`about-bg-container ${themeClass}`}>
            <img className="about-img" src={imageUrl} alt="about" />
            <h1>About</h1>
          </div>
        )
      }}
    </ThemeContext.Consumer>
  </>
)

export default About
