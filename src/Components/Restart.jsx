import React from 'react'

const  Restart = () => {

  const restart=()=>{
    location.reload();
  
  }
  return (
    <div className='score fixed top-10 left-2 bg-blue-300 w-auto rounded-md text-center p-4'>
        
        <button onClick={restart}>Restart</button>
    </div>
  )
}

export default Restart