
import React from 'react'

// import { ProductProps } from '../typing'


function Product({imgURL , name , price ,showPrice ,showName} : any) {
  return (
    <div className=' bg-white justify-center flex flex-col'>
      <button ><img src={imgURL} alt={name} /></button>
        {showName && <p className=' text-xl font-bold px-4 border-t'>{name}</p>}
        {showPrice && <p className=' text-lg px-4 font-semibold text-gray-600'>{price}</p>}
    </div>
  )
}
const productPage = ()=>{window.location.assign("/Productpage.tsx")}


export default Product
