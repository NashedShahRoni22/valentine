import React from "react";
import Lottie from "react-lottie";
import { Outlet } from "react-router-dom";
import buble from "../assets/animations/love-buble.json";

export default function Main() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: buble,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <main className="mx-5 relative lg:container lg:mx-auto min-h-screen flex flex-col justify-center items-center">
      <div className="hidden md:block absolute right-0 bottom-0">
        <Lottie options={defaultOptions} height={400} width={400} />
      </div>
      <Outlet />
      <div className="hidden md:block absolute left-0 bottom-0">
        <Lottie options={defaultOptions} height={400} width={400} />
      </div>
    </main>
  );
}
