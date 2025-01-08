import { useState } from "react";
import "./App.css";
import { boxdata as initialBoxData } from "./Data/data";

function App() {
  // Shuffle the data during initialization
  const shuffleArray = (array) => {
    return [...array].sort(() => Math.random() - 0.5);
  };

  const [boxData, setBoxData] = useState(
    shuffleArray(
      initialBoxData.map((item) => ({ ...item, currentColor: "gray" }))
    )
  );

  const changeBoxColor = (id, originalColor) => {
    setBoxData((prevData) =>
      prevData.map((item) =>
        item.id === id ? { ...item, currentColor: originalColor } : item
      )
    );
  };

  return (
    <>
      <div className="bg-slate-600 w-full h-screen m-0">
        <div>
          <h1 className="text-4xl font-bold tracking-wide text-white pt-10">
            Test Your Luck
          </h1>
        </div>
        <div className="border-black border ml-56 mt-16 mr-56 p-10 ">
          <div className="flex flex-wrap gap-10">
            {boxData.map((item) => (
              <div
                key={item.id}
                className="h-24 w-24 p-5 rounded-lg"
                style={{ backgroundColor: item.currentColor }}
                onClick={() => changeBoxColor(item.id, item.color)}
              >
                {/* Conditionally render the image if the color is not gray */}
                {item.currentColor !== "gray" && (
                  <img src={`src/assets/${item.img}`} alt="" height={50} />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
