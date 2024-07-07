import { useState } from "react";

import "./App.css";

function App() {
  let [background, setBackground] = useState();
  let [textcolor, setTextColor] = useState();

  const changeBackground = (color, textColor) => {
    setBackground(color);
    document.body.style.backgroundColor = color;
    setTextColor(textColor);
  };

  return (
    <div className="main ">
      <h1
        className="text-center text-xl md:text-5xl lg:text-6xl mt-20 font-bold mb-0"
        style={{ color: textcolor }}
      >
        CSS BACKGROUND COLOR CHANGER
      </h1>
      <div className="btncontainer grid grid-cols-2 md:grid-cols-5 lg:grid-cols-9 gap-4 rounded-md top-96 mt-60 bg-white">
        <button
          className="red bg-red-600 rounded-lg text-white"
          onClick={() => {
            changeBackground("#e53e3e", "cyan");
          }}
          onDoubleClick={() => {
            changeBackground("black");
          }}
        >
          Red
        </button>
        <button
          className="green bg-green-600  rounded-lg text-white"
          onClick={() => {
            changeBackground("#43A047", "black");
          }}
          onDoubleClick={() => {
            changeBackground("black");
          }}
        >
          Green
        </button>
        <button
          className="blue bg-blue-600 rounded-lg text-white"
          onClick={() => {
            changeBackground("#1E88E5", "white");
          }}
          onDoubleClick={() => {
            changeBackground("black");
          }}
        >
          Blue
        </button>
        <button
          className="lavender bg-purple-400  rounded-lg text-white"
          onClick={() => {
            changeBackground("#D8BFD8", "black");
          }}
          onDoubleClick={() => {
            changeBackground("black", "white");
          }}
        >
          Lavender
        </button>
        <button
          className="purple bg-purple-600  rounded-lg text-white"
          onClick={() => {
            changeBackground("#805ad5", "yellow");
          }}
          onDoubleClick={() => {
            changeBackground("black");
          }}
        >
          Purple
        </button>
        <button
          className="pink bg-pink-600 rounded-lg text-white"
          onClick={() => {
            changeBackground("#d53f8c", "black");
          }}
          onDoubleClick={() => {
            changeBackground("black");
          }}
        >
          Pink
        </button>
        <button
          className="orange bg-orange-600  rounded-lg text-white"
          onClick={() => {
            changeBackground("orange", "blue");
          }}
          onDoubleClick={() => {
            changeBackground("black");
          }}
        >
          Orange
        </button>
        <button
          className="yellow bg-yellow-600  rounded-lg text-white"
          onClick={() => {
            changeBackground("#CA8A04", "black");
          }}
          onDoubleClick={() => {
            changeBackground("black");
          }}
        >
          Yellow
        </button>
        <button
          className="black bg-black rounded-lg text-white"
          onClick={() => {
            changeBackground("black");
          }}
        >
          Black
        </button>
      </div>
    </div>
  );
}

export default App;
