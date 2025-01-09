import React from 'react'

const GameOver = () => {
  return (
    <div>
        <div className='bg-red-500 w-full h-48 mt-48 pt-8 z-0'>

<h1 className='text-9xl  font-mono z-0'>Game over</h1>
        </div>
      <div className='-mt-96 ml-96 z-30 bg-green'>
        
      <img src="src/assets/gameOver.png" alt=""  className='w-1/2  '/>
      </div>
        
    </div>
  )
}

export default GameOver