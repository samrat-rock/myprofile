import React, { useEffect, useState } from 'react'
import { Sir } from '../Components/Sir'
import '../App.css';
import { Link } from 'react-router-dom';
import ProductBycat from '../Components/ProductBy';

function Home() {
  let [cat, setCat]=useState([])
    useEffect(()=>{
      fetch('https://dummyjson.com/products/categories')
      .then(res => res.json())
      .then((a)=>setCat(a));
    },[])

    
  
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

<div className="shop-categories">
            <p className="category-title">Shop by categories</p>
            <ul className="list-group">
                {cat.map((a) => (
                    <li key={a.slug}>
                        <Link to={`/cat/${a.slug}`}>{a.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
  </div>

  
  <div className='ml-4 text-2xl p-3 hover:bg-gray-500'>
    <p>About us</p>
  </div>
  <div className='ml-4 text-2xl p-3 hover:bg-gray-500'>
    <p>Return Policy</p>
  </div>
  <div className='ml-4 text-2xl p-3 hover:bg-gray-500'>
    <p>Terms & Conditions</p>
  </div>
  <div className='ml-4 text-2xl p-3 hover:bg-gray-500'>
    <p>Shipping & Retrun</p>
  </div>
  <div className='ml-4 text-2xl p-3 hover:bg-gray-500'>
    <p>Contact Us</p>
  </div>
  <div className='ml-4 text-2xl p-3 hover:bg-gray-500'>
    <p>Blog</p>
  </div>
</div>

    <section className='flex justify-between py-3'>
      <div></div>
      <div>
        <img className='w-100' src="https://cdn11.bigcommerce.com/s-uszeqex11r/images/stencil/original/carousel/7/slider.jpg?c=1" alt="" />
      </div>
    </section>
    
    <ProductBycat tt='beauty'/>
    <ProductBycat tt='fragrances'/>
    <ProductBycat tt='laptops'/>
    <ProductBycat tt='furniture'/>

    </>
    
  )
}

export default Home
