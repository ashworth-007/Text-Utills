import React from 'react'
// rfc
import PropTypes from 'prop-types'

import { Link } from 'react-router-dom';



export default function Navbar(props) {
  return (
    <div>
         <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <Link className="navbar-brand" to="#"> {props.title} </Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/about">{props.aboutText}</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="#">Features</Link>
      </li>

      <li>
      <div className="form-check form-switch "   >
  <input class="form-check-input" type="checkbox" role="switch" onClick ={props.toggleMode} id="flexSwitchCheckDefault"/>
  <label className={`form-check-label text-${props.text} text-right`}for="flexSwitchCheckDefault"  >Enable Dark Mode</label>
</div>
      </li>

      
    </ul>

    
  </div>
  
</nav>

 
    </div>
  )
}

//isRequired  used to

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string
}

Navbar.defaultProps = {
    title: 'Set title here',

    aboutText: 'about text here'
}