import React from "react";
import { useState } from "react";
import { boxdata as initialBoxData } from "../Data/data";

const MainGame = ({updateCount,isgameOver}) => {
  // Shuffle the data during initialization
  const shuffleArray = (array) => {
    return [...array].sort(() => Math.random() - 0.5);
  };

  const [boxData, setBoxData] = useState(
    shuffleArray(
      initialBoxData.map((item) => ({ ...item, currentColor: "black" }))
    )
  );

  const changeBoxColor = (id, originalColor) => {
    setBoxData((prevData) =>
      prevData.map((item) =>
        item.id === id ? { ...item, currentColor: originalColor } : item
      )
    );
  };

  const [count, setCount] = useState(0);

  const counter = (id, color) => {
    if (color != "red") {
      setCount(count + 1);
    }else{
      updateCount(count);
      isgameOver();
    }
  };

  return (
    <>
      <div className="bg-slate-500 w-full h-screen m-0 main-game">
        <div>
          <h1 className="text-4xl font-bold tracking-wide text-white pt-10">
            Test Your Luck
          </h1>
        </div>
        <div className="mt-8">
          <h1 className="text-center">Current Score : <span className="text-yellow-400">{count}</span></h1>
        </div>
        <div className="border-black border ml-56  mr-56 p-8 ">
          <div className="flex flex-wrap gap-8">
            {boxData.map((item) => (
              <div
                key={item.id}
                className="h-24 w-24 p-5 rounded-lg"
                style={{ backgroundColor: item.currentColor }}
                onClick={() => {
                  changeBoxColor(item.id, item.color);
                  counter(item.id, item.color);
                }}
              >
                {/* Conditionally render the image if the color is not gray */}
                {item.currentColor !== "black" && (
                  <img src={`src/assets/${item.img}`} alt="" height={50} />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default MainGame;
