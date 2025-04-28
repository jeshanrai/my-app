import React from 'react'
import propTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
  return (
    
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} ${props.mode}`}>
  <a className="navbar-brand" href="/">{props.title}</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item">
        <Link Link className="nav-link" to="/About">About</Link>
      </li>
      
    </ul>

    <form className="form-inline my-2 my-lg-0">
    <div className={`custom-control custom-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
  <input
    type="checkbox" className="custom-control-input" id="customSwitch1" onClick={props.toggleMode}
  />
  <label className="custom-control-label mx-2" htmlFor="customSwitch1">
    {props.btntext}
  </label>
</div>

      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    
    </form>
  </div>
</nav>
      
    
  )
}
Navbar.propTypes = {
    title: propTypes.string.isRequired
}

Navbar.defaultProps = {
    title: "Set Title Here"
}   
