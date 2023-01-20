import React from 'react'
import { groq } from "next-sanity";
import client from '../../../utils/client';
import urlFor from '../../../utils/urlFor';

type Props = {
  params: {
    slug : string
  }
}

async function page({params: {slug}}: Props) {
const query = groq`
*[_type== "product" && slug.current == $slug][0]{
  _id,
  title,
  slug,
  mainImage,
  seller->,
  body,
  price
}`

const product = await client.fetch(query , {slug})
  return (
    <div className='max-w-8xl grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 mx-auto'>
      <div>
        <img src={urlFor(product.mainImage)}/>
      </div>
      <div>
        <h1 className='text-5xl'>{product.title}</h1>
      </div>
     
    </div>
  )
}

export default page
