import React from 'react'

import { ProductProps } from '../typing'


function Product({imgURL , name , price ,showPrice ,showName} : ProductProps) {
  return (
    <div className=' bg-white justify-center flex flex-col'><img src={imgURL} alt={name} />
        {showName && <p className=' text-xl font-bold px-4 border-t'>{name}</p>}
        {showPrice && <p className=' text-lg px-4 font-semibold text-gray-600'>{price}</p>}
    </div>
  )
}


export default Product
