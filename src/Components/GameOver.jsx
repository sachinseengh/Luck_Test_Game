import React from 'react';

const GameOver = () => {
  return (
    <>
    <div className='relative game-over'>
       
      <div className='absolute bg-red-500 w-full h-48 mt-48 pt-8 z-0 '>
      
      </div>

     
      <div className='absolute bg-transparent w-full  h-16  z-40 '>
      
        <img src="src/assets/gameOver.png" alt="" className='w-1/2 ml-72   '/>
      </div> 
      <div className='absolute mt-52  z-50 w-full'>
      <h1 className='text-9xl font-mono text-gray'>Game over</h1>
      </div>

   </div>
    </>
  );
}

export default GameOver;
