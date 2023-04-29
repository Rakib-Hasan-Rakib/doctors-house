import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import app from "../firebase/firebase.config";
import Swal from "sweetalert2";

const auth = getAuth(app);

const SignIn = () => {
  let [showPass, setShowPass] = useState(false);
  let [inputType, setInputType] = useState("password");

  const handleFormSubmit = (event) => {
    event.preventDefault();
    let email = event.target.email.value;
    let password = event.target.password.value;
    console.log(email, password);
    handleSignIn(email, password);
  };
  const handleSignIn = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        let user = result.user;
        console.log(user);
        if (user.emailVerified) {
          Swal.fire({
            title: "Great Job",
            text: "You logged In Successfully",
            icon: "success",
            confirmButtonText: "Ok",
          });
        } else {
          Swal.fire({
            title: "Error!",
            text: "Please Verify Your Email First",
            icon: "error",
            confirmButtonText: "Ok",
          });
        }
      })
      .catch((error) => {
        let errorMessage = error.message;
        let errorText = errorMessage
          .split("/")[1]
          .slice(0, errorMessage.split("/")[1].length - 2);
        console.log(errorText);
        Swal.fire({
          title: "Error!",
          text: errorText,
          icon: "error",
          confirmButtonText: "Ok",
        });
      });
  };
  return (
    <div>
      <h1 className="text-2xl md:text-5xl text-sky-700 text-center my-8">
        Please Sign In!!
      </h1>
      <div className="flex flex-col-reverse md:flex-row justify-between items-center w-10/12 mx-auto">
        <div className="basis-1/2">
          <form
            onSubmit={handleFormSubmit}
            action=""
            className="flex flex-col justify-center items-center"
          >
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Type your email here"
              required
              className="border border-blue-900 rounded-md outline-none my-2 p-1 w-full"
            />
            <input
              type={inputType}
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
              Sign In
            </button>
          </form>
          <p className="text-cyan-800 text-center my-6">
            Don't have account yet?{" "}
            <Link className="text-blue-700 font-semibold" to="/sign-up">
              Sign Up
            </Link>{" "}
            here..
          </p>
        </div>
        <div className="basis-1/2">
          <img
            src="https://i.ibb.co/hYJTmVX/undraw-Mobile-login-re-9ntv-1.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default SignIn;
