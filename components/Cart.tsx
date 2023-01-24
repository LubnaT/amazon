import { Menu, Transition } from '@headlessui/react'
import Link from 'next/link'
import { Fragment, useEffect, useRef, useState } from 'react'

export default function Cart() {
  return (
    <div className=" z-50 text-right">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex w-full justify-center rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
          <div className='flex  border-2 border-transparent hover:cursor-pointer hover:border-white border-solid'>
         <div className=' font-medium flex flex-col items-end mr-0'>
            <div className=' flex flex-col text-xl text-center scale-75 '>
             <p className='h-3 text-orange-400'>0</p>
             <span className="pl-2 flex item-center w-[60px] h-[40px] ">
                <img className ="object-fit w-[60px] h-[60px]" src="https://www.freeiconspng.com/thumbs/cart-icon/cart-icon-16.png"/>
             </span>
            </div>
         </div>
         <div className='text-sm font-bold pt-6'>Cart</div>
        </div>    
           
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1 ">
              <Menu.Item>
                
              </Menu.Item>
            
            </div>
            <Menu.Items>
           <Link href={''}> 
              <div className="p-2 mt-4 font-semibold w-full items-center text-sm 
                   group-hover:gradient-to-r from-yellow-400 to-pink-400 bg-yellow-500">
                  Proceed to buy
                </div>
          </Link>
            </Menu.Items>
           
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  )
}

  
