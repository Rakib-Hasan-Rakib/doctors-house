import React from 'react';
import Lottie from "lottie-react";
import welcomeAnimation from "../../public/72342-welcome.json";

const Home = () => {
    return (
      <div>
        <div className="w-3/5 mx-auto">
          <Lottie animationData={welcomeAnimation} loop={true} />
        </div>
        <h1 className="text-2xl md:text-5xl text-sky-700 text-center capitalize">
          Welcome to doctor's house
        </h1>
      </div>
    );
};

export default Home;