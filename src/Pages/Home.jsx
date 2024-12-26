import React from 'react'
import { Sir } from '../Components/Sir'
import '../App.css';

function Home() {
  return (
    <>
    <div className='App-header'>

      <Sir/>
      
     
    </div>
    <div className='bg-yellow-500 pl-20 p-10 flex items-center gap-5'>
  
  

  
  <div className='text-[20px] border-2 border-black bg-black text-white px-4 py-2 flex'>
  <div className='mr-4 mt-1'>
  <button className='flex flex-col items-center justify-center space-y-1 transform transition-transform duration-300 hover:rotate-180'>
    <span className='block w-6 h-1 bg-white transform transition-transform duration-300 hover:bg-red-500'></span>
    <span className='block w-6 h-1 bg-white transform transition-transform duration-300'></span>
    <span className='block w-6 h-1 bg-white transform transition-transform duration-300'></span>
  </button>
</div>

    <p>Shop by categories</p>
  </div>

  
  <div className='ml-4 text-2xl p-3 hover:bg-gray-500'>
    <p>About us</p>
  </div>
</div>

    </>
    
  )
}

export default Home
