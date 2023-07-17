import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [login, setLogin] = useState(false)

  const auth = localStorage.getItem('user')

  const logout = () =>{
    localStorage.clear();
    
  }


  const loginHandler = () =>{
    setLogin(true)
  }
  const logoutHandler = () =>{
    setLogin(false)
  }

  


  return (
    <div>
      {
        login ? (<nav className="navbar navbar-expand-lg text-light bg-success">
        <div className="container-fluid">
        <Link className="navbar-brand text-light fw-bold" to="/">
          hotel       
          </Link>
          
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link text-light fw-bold" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link  text-light fw-bold" to="/pets">
                  blog room
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link  text-light fw-bold" to='/service'>
                  our room
                </Link>
              </li>
{/*               
              <li className="nav-item">
                <Link className="nav-link  text-light fw-bold" to='/Food'>
                  Food
                </Link>
              </li> */}
             

              <li className="nav-item">
                <Link className="nav-link  text-light fw-bold" to="/contact">
                  Contact Us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link  text-light fw-bold" onClick={logoutHandler} to='/login'>
                  Logout
                </Link>
              </li>  
              
            </ul>
          
          </div>
        </div>
      </nav>) : (
<nav className="navbar navbar-expand-lg navbar-light bg-danger">
        <div className="container-fluid">
          <Link className="navbar-brand text-light fw-bold" to="/" >
          e comerice
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse  justify-content-end" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link text-light fw-bold" to="/" onClick={loginHandler} data-toggle="modal" data-target="#loginModal" >
                  Login
                </Link>
                
                
              </li>
            </ul>
          </div>
        </div>
      </nav>)
      }
        </div>

  );
};

export default Navbar;
