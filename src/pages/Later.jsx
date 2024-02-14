import React from "react";
import emojji from "../assets/animations/love-letter.json";
import Lottie from "react-lottie";
import { Link } from "react-router-dom";

export default function Later() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: emojji,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="min-h-[40vh]">
      <p className="text-xl md:text-3xl font-semibold text-center">
        See you again!
      </p>
      <Lottie options={defaultOptions} height={300} width={300} />
      <div className="absolute top-5 left-5">
        <Link
          to={"/"}
          className="px-6 py-2 bg-red-600 text-white border-0 shadow rounded no-underline"
        >
          Home
        </Link>
      </div>
    </div>
  );
}
