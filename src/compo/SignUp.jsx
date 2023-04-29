import React from "react";
import { Link } from "react-router-dom";
import googleSignUp from "../assets/google-btn.png"
import githubSignUp from "../assets/github-btn.png"

const SignUp = () => {
  return (
    <div>
      <h1 className="text-5xl text-sky-700 text-center my-8">
        Please Sign Up!!
      </h1>
      <div className="flex justify-between items-center w-10/12 mx-auto">
        <div className="basis-1/2">
          <form action="" className="flex flex-col justify-center items-center">
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Type your name here"
              required
              className="border border-blue-900 rounded-md outline-none my-2 p-1 w-full"
            />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Type your email here"
              required
              className="border border-blue-900 rounded-md outline-none my-2 p-1 w-full"
            />
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Type your password here"
              required
              className="border border-blue-900 rounded-md outline-none my-2 p-1 w-full"
            />
            <button
              type="submit"
              className="bg-sky-700 py-2 px-6 rounded-lg text-white font-bold my-2"
            >
              Sign UP
            </button>
          </form>
          <p className="text-cyan-800 text-center">
            Already have account?{" "}
            <Link className="text-blue-700 font-semibold" to="/sign-in">
              Sign In
            </Link> here..
          </p>
          <div className="flex flex-col justify-center items-center mt-16 gap-4">
            <img
              className="w-2/5"
              src={googleSignUp}
              alt="google sign up btn"
            />
            <img
              className="w-2/5"
              src={githubSignUp}
              alt="github sign up btn"
            />
          </div>
        </div>
        <div className="basis-1/2">
          <img src="https://i.ibb.co/Vmyggr3/undraw-Login-re-4vu2.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
