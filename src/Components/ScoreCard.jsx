import React from 'react'

const ScoreCard = ({score}) => {
  return (
    <div className='score fixed top-10 right-2 bg-blue-300 w-auto rounded-md text-center p-4'>
        <h1 className='text-black text-left font-bold text-2xl'>Score : {score}</h1>
        
    </div>
  )
}

export default ScoreCard