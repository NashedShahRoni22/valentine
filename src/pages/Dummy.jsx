import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Dummy = () => {
  const [videoStream, setVideoStream] = useState(null);
  const [model, setModel] = useState(null);

  useEffect(() => {
    const accessCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: { width: 500, height: 400 },
          audio: false,
        });
        setVideoStream(stream);
      } catch (error) {
        console.error("Error accessing camera:", error);
      }
    };

    const loadModel = async () => {
      try {
        // Check if the global objects are available
        if (window && window.blazeface && window.tf) {
          // Load the blazeface model directly from the window object
          const loadedModel = await window.blazeface.load();
          setModel(loadedModel);
        } else {
          console.error("BlazeFace model or TensorFlow.js not available.");
        }
      } catch (error) {
        console.error("Error loading blazeface model:", error);
      }
    };

    accessCamera();
    loadModel();
  }, []);

  const detectFaces = async () => {
    if (!videoStream || !model) return;
    const videoElement = document.getElementById("video"); // Get the video element
    if (videoElement.videoWidth === 0 || videoElement.videoHeight === 0) {
        return; // Skip processing if the video dimensions are not yet available
      }
    const prediction = await model.estimateFaces(videoElement); // Pass the video element
    console.log(prediction);
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    ctx.drawImage(videoElement, 0, 0, 500, 400);

    // Your face detection logic here...
  };

  useEffect(() => {
    const intervalId = setInterval(detectFaces, 40);

    return () => {
      clearInterval(intervalId);
    };
  }, [videoStream, model]);

  return (
    <div>
      <h1>Facial Detection</h1>
      <video id="video" autoPlay width="500" height="400" style={{ display: 'none' }} />
      <canvas id="canvas" width="500" height="400" />
      <h1 className="show-number" />
      <h1 className="right_left" />
      <h1 className="up_down" />
      <Link to={"/"}>Home</Link>
    </div>
  );
};

export default Dummy;
