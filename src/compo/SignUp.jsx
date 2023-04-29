import React from "react";
import { Link } from "react-router-dom";
import googleSignUp from "../assets/google-btn.png";
import githubSignUp from "../assets/github-btn.png";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  sendEmailVerification,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import app from "../firebase/firebase.config";
import Swal from "sweetalert2";

const auth = getAuth(app);

const SignUp = () => {
  const handleFormSubmit = (event) => {
    event.preventDefault();
    // console.log(event.target);
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    // console.log(name, email, password);
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result);
        handleUpdateProfile(result.user, name);
        handleVerificationEmail(result.user);
        Swal.fire({
          title: "Great Job",
          text: "Your account have been created",
          icon: "success",
          confirmButtonText: "Ok",
        });
      })
      .catch((error) => {
        let errorMessage = error.message;
        let errorText = errorMessage
          .split("/")[1]
          .slice(0, errorMessage.split("/")[1].length - 2);
        Swal.fire({
          title: "Error!",
          text: errorText,
          icon: "error",
          confirmButtonText: "Ok",
        });
      });
  };
  const handleUpdateProfile = (user, name) => {
    updateProfile(user, {
      displayName: name,
    })
      .then(() => {
        console.log("profile updated");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  // sign up with google
  const googleProvider = new GoogleAuthProvider();
  const handleGoogleSignUp = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        console.log(result);
        handleVerificationEmail(result.user);
        Swal.fire({
          title: "Great Job",
          text: "You logged In Successfully",
          icon: "success",
          confirmButtonText: "Ok",
        });
      })
      .catch((error) => {
        let errorMessage = error.message;
        let errorText = errorMessage
          .split("/")[1]
          .slice(0, errorMessage.split("/")[1].length - 2);
        Swal.fire({
          title: "Error!",
          text: errorText,
          icon: "error",
          confirmButtonText: "Ok",
        });
      });
  };
  // sign up with github
  const githubProvider = new GithubAuthProvider();
  const handleGithubSignUp = () => {
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        console.log(result.user);
        handleVerificationEmail(result.user);
        Swal.fire({
          title: "Great Job",
          text: "You logged In Successfully",
          icon: "success",
          confirmButtonText: "Ok",
        });
      })
      .catch((error) => {
        let errorMessage = error.message;
        let errorText = errorMessage
          .split("/")[1]
          .slice(0, errorMessage.split("/")[1].length - 2);
        Swal.fire({
          title: "Error!",
          text: errorText,
          icon: "error",
          confirmButtonText: "Ok",
        });
      });
  };
  const handleVerificationEmail = (user) => {
    sendEmailVerification(user).then(() => {
      console.log("please check your email");
    });
  };
  return (
    <div>
      <h1 className="text-2xl md:text-5xl text-sky-700 text-center my-8">
        Please Sign Up!!
      </h1>
      <div className="flex flex-col-reverse md:flex-row justify-between items-center w-10/12 mx-auto">
        <div className="basis-1/2">
          <form
            onSubmit={handleFormSubmit}
            action=""
            className="flex flex-col justify-center items-center"
          >
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
              Sign Up
            </button>
          </form>
          <p className="text-cyan-800 text-center">
            Already have account?{" "}
            <Link className="text-blue-700 font-semibold" to="/sign-in">
              Sign In
            </Link>{" "}
            here..
          </p>
          <div className="flex flex-col justify-center items-center my-12 md:mt-16 gap-4">
            <img
              onClick={handleGoogleSignUp}
              className="w-2/5 cursor-pointer"
              src={googleSignUp}
              alt="google sign up btn"
            />
            <img
              onClick={handleGithubSignUp}
              className="w-2/5 cursor-pointer"
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
