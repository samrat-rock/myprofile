import React, {  useEffect, useState } from 'react'
import { Link } from 'react-router-dom';


function ProductBycat(props) {
    let [data, setData]=useState([])
    
    useEffect(()=>{
      fetch(`https://dummyjson.com/products/category/${props.tt}`)
      .then(res => res.json())
      .then((a)=>setData(a.products));
    },[props.tt])
  return (
    <>
        <section className='bg-white'>
        <div className='p-5 m-6 text-center  '>
          <h2 className='text-[40px] font-bold'>{props.tt}</h2>
          <div className='flex  gap-5 pl-[150px] '>
            {data.slice(0,4).map((a)=>(
                <div className='border-2 border-black object-contain'>
                       <div className='flex gap-3' key={a.id}>
                        <img src={a.thumbnail} alt="" />
                        
                        </div> 
                        <h3>{a.title}</h3> 
                </div>
            ))}
          </div>
          <div>
            
          </div>
        </div>
      </section>
    </>
  )
}

export default ProductBycat
