import React from 'react'

const HomePage1NavBar = () => {

  return (
      <nav>
        <div className="navbar-topbar">
          <p className="navbar-topbar-address">
            24 Olive Street, Prairie, NY 53590
          </p>
          <a className="navbar-topbar-email-link">
            whitecollar@gmail.com
          </a>
          <p className="navbar-topbar-working-hours">
            Mon - Fri: 8:00 am - 5:00 pm
          </p>
        </div>
        <div className="navbar-header">
          <a>Home</a>
          <a>About Us</a>
          <a>Pages</a>
          <a>Projects</a>
          <a>Contact us</a>
          <a><button>Get Consulting</button></a>
        </div>
      </nav>
  )
}

export default HomePage1NavBar