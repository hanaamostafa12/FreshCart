// import axios from 'axios'
// import React, { useContext, useEffect, useState } from 'react'
// import { useParams } from 'react-router-dom'
// import { appContext } from '../Context/appContext'

// export default function BrandDetails() {
//  let{counter,setCounter}= useContext(appContext)
//     const [Brand, setBrand] = useState({})
//     let x =  useParams()
//     // console.log(x)
//    useEffect(()=>{
//     getBrands()
//    },[])
//      async function getBrands(){
//          let {data}=  await axios.get(`https://ecommerce.routemisr.com/api/v1/brands/${x.id}`)
//          setBrand(data.data)
//          console.log(data.data)
//     }
//   return (
//     <>
//        <div className="container">
//         <div className="row">
          
//            <div className="col-md-3">
//                   <img src={Brand.image} className='w-100' alt="" />

//             </div>
//             <div className="col-md-9">
//                 <h5>
//                     {Brand.slug}
//                 </h5>
             
        
             

// <button onClick={()=>{
//   setCounter(counter+1)
// }} className='btn w-100 bg-main text-white' >Add To Cart</button>
//             </div>
            
            
       
//         </div>
//        </div>
//     </>
//   )
// }