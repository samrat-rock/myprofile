import React from 'react';
import { FaTag, FaGift, FaPhoneAlt } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { IoIosSearch } from "react-icons/io";
import Home from '../Pages/Home';
import { Route, Routes } from 'react-router-dom';
import { CiHeart } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { FaCartShopping } from "react-icons/fa6";
import '../App.css';
import Category from '../Pages/Category';



function Header() {
  return (
    <>
      <nav className="bg-gray-300 h-[50px] p-2 flex justify-between">
        <div className="flex gap-2 ml-10 mt-1">
          <FaTag className="mt-1 text-[20px]" />
          <p> Get upto 25% cashback on first order</p>
        </div>
        <div className="flex gap-5 mt-1">
          <div className="flex gap-2 border-1 border-r border-black mt-1">
            <CiMail className="mt-1 text-[20px]" />
            <p className="mr-3 mt-[2px]">Support@yourStore.com</p>
          </div>
          <div className="flex gap-2">
            <FaGift className="mt-1 text-[20px]" />
            <p className="m-1">Gift Certificates</p>
          </div>
        </div>
      </nav>

      <header className="flex items-center">
        <div className="m-8 ml-[100px]">
          <img
            src="https://cdn11.bigcommerce.com/s-uszeqex11r/images/stencil/200x48/logo_1614156460__72483.original.png"
            alt="Logo"
          />
        </div>
        <div className="input border-2 border-gray-500/50 w-[500px] h-[60px] flex justify-between ml-20 font-bold">
          <input type="text" placeholder="search the store" className="ml-2 placeholder" />
          <button className="mr-3 flex gap-1 h-10 mt-2 bg-yellow-400 text-[18px] w-[100px] pl-3 hover:bg-gray-700 hover:transform hover:translate-x-2 transition-transform duration-500 ease-in-out">
            <IoIosSearch className="mt-3" />
            <span className="mt-2">Search</span>
          </button>
        </div>
        <div className="icons ml-20 pt-3 flex gap-5">
          <div className="flex flex-col items-center group">
            <FaPhoneAlt className="group-hover:rotate-180 transition-transform duration-500 ease-in-out" />
            <p className='mt-3'> Call us <br/> 9815467707</p>
            
          </div>
          <div className='logow pl-32 flex gap-8'>
    <div className='text-[30px]'>
        <CiHeart className='icon hover:text-yellow-400' />
    </div>
    <div className='text-[30px]'>
        <CgProfile className='icon hover:text-yellow-400' />
    </div>
    <div className='text-[30px]'>
        <FaCartShopping className='icon hover:text-yellow-400' />
    </div>
</div>
</div>
      </header>
      
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/cat/:cid" element={<Category/>}/>
      
      
      
     </Routes>
     
    </>
  );
}

export default Header; 
