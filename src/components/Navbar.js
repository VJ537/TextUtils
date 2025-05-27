import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom';
import React, { useState } from 'react';


export default function Navbar(props) {
  const [activePath, setActivePath] = useState('/');
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="#">{props.title}</Link>
     
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          {/* <Link className="navbar-brand" aria-current="page" onClick={props.activeLink} to="/">Home</Link> */}
        <Link
        to="/"
        className="navbar-brand"
        style={activePath === '/' ?  {...props.activeLinkStyle} : {...props.defaultLinkStyle}}
        onClick={() => setActivePath('/')}
      >
        Home
      </Link>
        </li>
        <li className="nav-item">
          {/* <Link className="navbar-brand" to="about">{props.aboutText}</Link> */}
          <Link
        to="/about"
        className="navbar-brand"
        style={activePath === '/about' ? {...props.activeLinkStyle} : {...props.defaultLinkStyle}}
        onClick={() => setActivePath('/about')}
      >
        About
      </Link>
        </li>
        
      </ul>
      <form className="d-flex me-2" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
      <div className='d-flex'>
        <div className='bg-primary rounded mx-2' onClick={()=>props.colorToggle('primary')} style={{height:'20px',width:'20px',cursor:'pointer'}}></div>
        <div className='bg-danger rounded mx-2' onClick={()=>props.colorToggle('danger')} style={{height:'20px',width:'20px',cursor:'pointer'}}></div>
        <div className='bg-success rounded mx-2' onClick={()=>props.colorToggle('success')} style={{height:'20px',width:'20px',cursor:'pointer'}}></div>
        <div className='bg-warning rounded mx-2' onClick={()=>props.colorToggle('warning')} style={{height:'20px',width:'20px',cursor:'pointer'}}></div>
        

      </div>
      <div className={`form-check form-switch me-4 text-${props.mode==='light'?'dark':'light'}`} >
  <input className="form-check-input" onClick={()=>props.toggleMode()} type="checkbox" role="switch" id="switchCheckDefault"/>
  <label className="form-check-label" htmlFor="switchCheckDefault" >Toggle Mode</label>
</div>
    </div>
  </div>
</nav>
  )
  
}
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired
};

