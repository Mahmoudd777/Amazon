import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

function Login() {
  return (
    <div className="login bg-white h-screen flex flex-col items-center">
      <Link to="/">
        <img
          className="login__logo mt-20 mb-20 object-contain w-32 mx-auto"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt="Amazon Logo"
        />
      </Link>

      <div className="login__container w-[300px] p-6 flex flex-col  border border-gray-300 rounded">
        <h1 className="font-semibold text-3xl  mb-6">Sign-in</h1>

        <form className="w-full">
          <h5 className="mb-1">E-mail</h5>
          <input
            type="text"
            className="h-8 mb-2 w-full border border-gray-300 rounded"
          />

          <h5 className="mb-1">Password</h5>
          <input
            type="password"
            className="h-8 mb-4 w-full border border-gray-300 rounded"
          />

          <button
            type="submit"
            className="login__signInButton bg-[#f0c14b] w-full text-black  font-semibold rounded h-8 border-black border-2  hover:bg-yellow-500 mb-4"
          >
            Sign In
          </button>
        </form>

        <p className="text-xs mt- text-start">
          By signing-in you agree to the AMAZON Conditions of Use & Sale. Please
          see our Privacy Notice, our Cookies Notice and our Interest-Based Ads
          Notice.
        </p>

        <button className="login__registerButton border rounded h-8 border-gray-400 w-full mt-4">
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login;
