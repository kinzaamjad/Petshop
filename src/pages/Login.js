import React from 'react'
// import  { useState } from "react";
// import Home from './Home';
// import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate()

  return (    

    <>
    <div>
<br />
<br />
<div className="container">
  <div className="row justify-content-center">
    <div className="col-md-8">
      <div className="card-group mb-0">
        <div className="card p-4">
          <div className="card-body">
            <h1>Login</h1>
            <p className="text-muted">Sign In to your account</p>
            <div className="input-group mb-3">
              <span className="input-group-addon"><i className="fa fa-user" /></span>
              <input type="text" className="form-control" placeholder="Username" />
            </div>
            <div className="input-group mb-4">
              <span className="input-group-addon"><i className="fa fa-lock" /></span>
              <input type="password" className="form-control" placeholder="Password" />
            </div>
            <div className="row">
              <div className="col-6">
                <button type="button" className="btn btn-primary px-4">Login</button>
              </div>
              <div className="col-6 text-right">
                <button type="button" className="btn btn-link px-0">Forgot password?</button>
              </div>
            </div>
          </div>
        </div>
        <div className="card text-white bg-primary py-5 d-md-down-none" style={{width: '44%'}}>
          <div className="card-body text-center">
            <div>
              <h2>Sign up</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <button onClick={()=>navigate("/register")}
                  type="button" className="btn btn-primary active mt-3">Register Now!</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>

  </>

  )}
  

{ /* <section className="vh-100 gradient-custom">
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-12 col-md-8 col-lg-6 col-xl-5">
        <div className="card bg-dark text-white" style={{borderRadius: '1rem'}}>
          <div className="card-body p-5 text-center">
            <div className="mb-md-5 mt-md-4 pb-5">
              <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
              <p className="text-white-50 mb-5">Please enter your login and password!</p>
              <div className="form-outline form-white mb-4">
                <input type="email" id="typeEmailX" name='email'    onChange={inputHandler}     value={userInfo.email}  className="form-control form-control-lg" />
                <label className="form-label" htmlFor="typeEmailX">Email</label>
              </div>
              <div className="form-outline form-white mb-4">
                <input type="password" id="typePasswordX" name='passward'   onChange={inputHandler} value={userInfo.passward} className="form-control form-control-lg" />
                <label className="form-label" htmlFor="typePasswordX">Password</label>
              </div>
              <p className="small mb-5 pb-lg-2"><a className="text-white-50" href="#!">Forgot password?</a></p>
             <button className="btn btn-outline-light btn-lg px-5" onClick={saveRecord} type="submit">Login</button>
              <div className="d-flex justify-content-center text-center mt-4 pt-1">
                <a href="#!" className="text-white"><i className="fab fa-facebook-f fa-lg" /></a>
                <a href="#!" className="text-white"><i className="fab fa-twitter fa-lg mx-4 px-2" /></a>
                <a href="#!" className="text-white"><i className="fab fa-google fa-lg" /></a>
              </div>
            </div>
            <div>
              <p className="mb-0">Don't have an account? <a href="#!" className="text-white-50 fw-bold">Sign Up</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    // </div> */}


    
    
  






  


export default Login
