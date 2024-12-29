import React from 'react'

function Category() {
        let {cid}=useParams()
        let [data, setData]=useState([])
        useEffect(()=>{
          fetch(`https://dummyjson.com/products/category/${cid}`)
          .then(res => res.json())
          .then((a)=>setData(a.products));
        },[])
  return (
    <>
      <section>
            <div>
                <h2 className='text-[40px] font-bold py-5 text-center'>{cid} </h2>
                  {data.map((a)=>
                (
                    <div className='shadow p-2 border-2 border-black'>
                        <img src={a.thumbnail} alt="" />
                        <p>{a.title}</p>

                    </div>
                ))}  
               
            </div>
      </section>
    </>
  )
}

export default Category
