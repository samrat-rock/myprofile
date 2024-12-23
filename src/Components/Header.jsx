import React from 'react'


import { FaTag } from "react-icons/fa6";
import { CiMail } from "react-icons/ci";
import { FaGift } from "react-icons/fa6";
import { IoIosSearch } from "react-icons/io";


function Header() {
  return (
    <>
    <nav className='bg-gray-300 h-[50px] p-2 flex justify-between '>
<div className=' flex gap-2 ml-10 mt-1'>
<FaTag className='mt-1 text-[20px]'/> <p> Get upto 25% cashback on first order</p>
</div>

<div className='flex gap-5 mt-1'>
    <div className='flex gap-2 border-1 border-r border-black mt-1 '  >
    <CiMail className='mt-1 text-[20px]'/>    <p className='mr-3 mt-[2px]'>Support@yourStore.com</p>
    </div>
    <div className='flex gap-2'>
   <FaGift className='mt-1 text-[20px]'/>     <p className='m-1'>Gift Certificates</p>
    </div>
</div>

    </nav>
      <header className='flex'>
      <div className='m-8 ml-[100px]'>
    <img src="https://cdn11.bigcommerce.com/s-uszeqex11r/images/stencil/200x48/logo_1614156460__72483.original.png" alt="" />
</div>
<div className='input mt-8 border-2 border-gray-500/50 w-[500px] h-[60px] flex justify-between ml-20 '>
  <input type="text"  placeholder='search the store' className='ml-2'/>
  <button className='mr-3 flex gap-1  h-10 mt-2 bg-yellow-400 text-[18px]  w-[100px] pl-3 hover:bg-gray-700 transform  transition duration-500 '><IoIosSearch className='mt-3'/><span className='mt-2'>Search</span></button>
</div>
      </header>
    </>
  )
}

export default Header
