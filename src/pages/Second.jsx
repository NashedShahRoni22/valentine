import React from "react";
import emojji from "../assets/animations/love-emojji.json";
import Lottie from "react-lottie";
import { Link } from "react-router-dom";

export default function Second() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: emojji,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="min-h-[40vh] shadow rounded p-8">
      <p className="text-xl md:text-3xl font-semibold text-center">
        Would you travel to the ends of the earth for love?
      </p>
      <Lottie options={defaultOptions} height={200} width={200} />
      <div className="flex justify-center gap-5">
        <Link
          to={"/later"}
          className="px-6 py-2 bg-red-600 text-white border-0 shadow rounded no-underline"
        >
          No
        </Link>
        <Link
          to={"/third"}
          className="px-6 py-2 bg-blue-600 text-white border-0 shadow rounded no-underline"
        >
          Yes
        </Link>
      </div>
    </div>
  );
}
