import React from "react";
import emojji from "../assets/animations/love-kiss.json";
import Lottie from "react-lottie";
import { Link } from "react-router-dom";

export default function Final() {
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
      <Lottie options={defaultOptions} height={200} width={200} />
      <h1 class="font-extrabold text-5xl text-red-600">
        I Love You
      </h1>
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
