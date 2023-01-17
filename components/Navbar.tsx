import React from 'react'
import logo from "../app/assets/logo.jpeg";
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import LocationOnIcon from '@mui/icons-material/LocationOn';

type Props = {}

function Navbar({}: Props) {
  return (
    <div className='bg-[#131921] p-2 flex text-white'>
    <div className='flex mx-4 items-center justify-between w-full space-x-4'>
        <img className='' src={logo.src}/>
        <div className='font-normal flex  text-sm  whitespace-nowrap'>
            <LocationOnIcon className='mt-2 text-lg' />
            <div>
            <p className='text-gray-400 text-xs'>Hello </p>
            <p className='leading-3 font-bold text-sm'>Select your Address</p>
            </div>
        </div>

        <div className='flex h-10 w-full'>
          <button className='flex items-center bg-gray-200 border border-[#131921]
           outline-1 p-2 text-black text-sm font-thin rounded-l-lg'>
           All <ArrowDropDownIcon  fontSize='inherit'/>
          </button>
            <input className='border-y border border-[#131921] w-full'/>
           
            <button className='bg-yellow-400/90 text-3xl rounded-r-lg text-black flex
             items-center  border border-[#131921] border-r px-2'>
                <SearchIcon fontSize='inherit'/>
            </button>
        </div>

        <div className='flex items-end pt-2 '>
            <img src='https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/255px-Flag_of_India.svg.png'
            className='h-4'/>
            <select className='bg-transparent font-bold w-10 text-xs -mb-1'>
             <option className=' uppercase text-xs bg-White text-black'>EN</option>
             <option className='font-normal text-xs bg-White text-black'>English</option>
             <option className='font-normal text-xs bg-white text-black'>Hindi</option>
            </select>
        </div>

        <div className='pl-4 font-medium whitespace-nowrap '>
            <p className=' text-gray-400 text-xs'>Hello, sign in </p>
            <div className=' flex'>
             <p className=' text-sm leading-4'>Account & List</p>
             <ArrowDropDownIcon fontSize='inherit' />
            </div>
        </div>

        <div className=' font-medium '>
            <p className=' text-gray-400 text-xs'>Return</p>
            <div className=' flex'>
             <p className=' text-sm leading-4 whitespace-nowrap'>& Order</p>
            
            </div>
        </div>

        <div className='flex'>
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
        
       

    </div>

</div>
  )
}

export default Navbar