import React from 'react'

const Header = () => {
  return (
    <header className="header">
        <div className="header__wrap">
          <ul className="header__left">
            <li>
              <a href="#" className="coolLink" data-text="Home">
                <span>Home</span>
              </a>
            </li>
            <li>
              <a href="#" className="coolLink" data-text="Reviews">
                <span>Reviews</span>
              </a>
            </li>
            <li className="header__sm">
              <a href="#" className="coolLink" data-text="Revolution">
                <span>Revolution</span>
              </a>
            </li>
            <li className="header__sm">
              <a href="#" className="coolLink" data-text="Insights">
                <span>Insights</span>
              </a>
            </li>
            <li className="header__sm">
              <a href="#" className="coolLink" data-text="FAQ">
                <span>FAQ</span>
              </a>
            </li>
          </ul>
          <div className="header__right">
            <button className="coolButton">
              <span>Contact US</span>
            </button>
          </div>
        </div>
      </header>
  )
}

export default Header