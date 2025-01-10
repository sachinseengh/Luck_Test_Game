import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import "./App.css";

import MainGame from "./Components/MainGame";
import GameOver from "./Components/GameOver";
import { useState } from "react";
import ScoreCard from "./Components/ScoreCard";

function App() {
  const [gameOver,setGameOver]=useState(false);
  const [count,setCount]=useState(0);


  const updateCount=(count,isgameOver)=>{
    setCount(count);
   
  }
  const isgameOver=()=>{

     // Create a delay before changing gameOver state to true
     setTimeout(() => {
      setGameOver(true);
    }, 500);  
  }
  return (
    <BrowserRouter>
     
        
        <Routes></Routes>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <MainGame updateCount={updateCount} isgameOver={isgameOver} />
             {gameOver && <GameOver />}
             {gameOver && <ScoreCard score={count}/>}
            </>
          }
        ></Route>
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
