// import React, { useContext } from "react";
import { useContext } from 'react';
import image from '../../assets/images/login/login.svg'
import { Link } from "react-router-dom";
// import { AuthContext } from "../../provider/AuthProvider";
import { AuthContext } from './../../provider/AuthProvider';

const Login = () => {
    const {signIn} = useContext(AuthContext);
    const handleLogin = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password);
        signIn(email,password)
        .then((result) => {
            // Signed in 
            const user = result.user;
            console.log(user);
            // ...
          })
          .catch((error) => {
            const errorMessage = error.message;
            console.log(errorMessage);
            // ..
          });
        
    }
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div className="w-1/2 me-16">
            <img className="me-8" src={image} alt="" />
          
        </div>
        <div className="lg:ms-16 card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <h1 className="text-3xl font-bold text-center my-4">Login</h1>
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          <p className="text-center my-5">New to Car Doctor? <Link className="text-orange-700 font-bold " to={'/signup'}>SignUp</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
