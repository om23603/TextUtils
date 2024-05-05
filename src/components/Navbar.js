import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

export default function Navbar(props) {

  const btnL = () => {
    if (props.mode === 'light'){
      document.body.style.backgroundColor = '#ecbdbd';
    }
    else{
      document.body.style.backgroundColor = '#522323';
    }
  }

  const btnM = () => {
    if (props.mode === 'light'){
      document.body.style.backgroundColor = '#ccaee2';
    }
    else{
      document.body.style.backgroundColor = '#3b224d';
    }
  }

  const btnR = () =>{
    if (props.mode === 'light'){
      document.body.style.backgroundColor = '#afde97';
    }
    else{
      document.body.style.backgroundColor = '#284718';
    }
  }

  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">{props.title}</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">{props.aboutText}</Link>
              </li>
            </ul>
            {/* <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-outline-primary" type="submit">Search</button>
            </form> */}
            <div className="btn-group mx-2" role="group" aria-label="Basic mixed styles example">
              <button type="button" className="btn" onClick={btnL} style={{backgroundColor: props.mode==='light'?'#ecbdbd':'#522323'}}></button>
              <button type="button" className="btn" onClick={btnM} style={{backgroundColor: props.mode==='light'?'#ccaee2':'#3b224d'}}></button>
              <button type="button" className="btn" onClick={btnR} style={{backgroundColor: props.mode==='light'?'#afde97':'#284718'}}></button>
            </div>
            <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
              <input className="form-check-input" type="checkbox" onClick={props.toggleMode} role="switch" id="flexSwitchCheckDefault"/>
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
            </div>
          </div>
        </div>
      </nav>
  )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired
}

Navbar.defaultProps = {
    title: 'React App',
    aboutText: 'About'
}