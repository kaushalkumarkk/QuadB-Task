import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import './App.css'

const Signup = () => {
  const name = useRef();
  const email = useRef();
  const password = useRef();
  const mobno = useRef();
  const localSignUp = localStorage.getItem("signup");
  const handleSubmit = () => {
    // console.log(
    //   name.current.value,
    //   email.current.value,
    //   password.current.value
    // );
    if (name.current.value && email.current.value && password.current.value) {
      localStorage.setItem("name", name.current.value);
      localStorage.setItem("email", email.current.value);
      localStorage.setItem("password", password.current.value);
      localStorage.setItem("mobno", mobno.current.value);
      localStorage.setItem("signup", email.current.value);
      alert("Thankyou For Registration");
      name.current.value = "";
      email.current.value = "";
      password.current.value = "";
      mobno.current.value = "";
    } else alert("Fill all the data");
  };

  return (
    <>
    <div className="registration">
      <h1 className="mx-[100px] text-white text-[36px] font-[600]">
        Create an account
      </h1>
      <div className="container">
      <form className="flex flex-col w-[50vh] m-[100px] form">
        <input
          type="text"
          className="border-2 border-red-500 p-1 m-3 "
          placeholder="Enter Your Name"
          ref={name}
        />
        <input
          type="email"
          placeholder="Enter your Email id"
          className="border-2 border-red-500 p-1 m-3 "
          ref={email}
        />
        <input
          type="text"
          placeholder="Enter your mob no"
          className="border-2 border-red-500 p-1 m-3 "
          ref={mobno}
        />
        <input
          type="password"
          placeholder="Enter Your Password"
          className="border-2 border-red-500 p-1 m-3 "
          ref={password}
        />
        <button
          type="button"
          onClick={handleSubmit}
          className="text-white bg-red-500 p-2  m-3 rounded w-[100px]"
        >
          SignUp
        </button>
        <p className="m-3 text-white">
          I have already account{" "}
          <Link className="text-red-400 underline" to={"/login"}>
            Login
          </Link>
        </p>
      </form>
      </div>
      </div>
    
    </>
  );
};

export default Signup;
