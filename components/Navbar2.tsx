import React from 'react'
import add from '../app/assets/add.jpg'

type Props = {}

function Navbar2({}: Props) {
  return (
    <div className="flex flex-row items-center h-[30px] bg-[#232f3e] w-[100%] space-x-2">
            <div className="flex h-[30px] ml-[25px] items-center w-[30px]">
                <a className="flex hover:border-2 border-white border-solid h-[35px] text-white"> 
                    {/* <i className="flex"><img className="w-[20px] h-[20px]" src="" alt=""/></i>  */}
                    <span className="pl-[4] pt-[7px] text-sm font-bold item-center justify-self-center h-[40px]">All</span>
                </a>
            </div>

            <div className="ml-[0px] flex shrink grow overflow-hidden h-[50px] w-[850px]">
                <div className="flex shrink grow w-[500px]">
                    <div className="flex flex-row shrink grow flex-wrap overflow-hidden w-[500px]"> 
                        <a className="hover:border-2 border-white border-solid w-[40px] font-bold mt-[8px] mb-[2px] pt-[6px] pl-[6px] h-[34px] text-white text-sm">Sell</a>
                        <a href="#bestseller" className="hover:border-2 border-white border-solid w-[90px] font-bold mt-[8px] mb-[2px]  pt-[6px] pl-[6px]  h-[34px] text-white text-sm">Best Sellers</a>
                        <a href="#todaysdeal" className="hover:border-2 border-white border-solid w-[100px] font-bold mt-[8px] mb-[2px]  pt-[6px] pl-[6px] h-[34px] text-white text-sm">Today's Deal</a>
                        <a className="hover:border-2 border-white border-solid w-[70px] font-bold mt-[8px] mb-[2px]  pt-[6px] pl-[6px] h-[34px] text-white text-sm">Mobiles</a>
                        <a className="hover:border-2 border-white border-solid w-[130px] font-bold mt-[8px] mb-[2px] pt-[6px] pl-[6px] text-white text-sm">Customer Service</a>
                        <a className="hover:border-2 border-white border-solid w-[80px] font-bold mt-[8px] mb-[2px]  pt-[6px] pl-[6px] h-[34px] text-white text-sm">Electronics</a>
                        <a className="hover:border-2 border-white border-solid w-[120px] font-bold mt-[8px] mb-[2px]  pt-[6px] pl-[6px] h-[34px] text-white text-sm">Home & Kitchen</a>
                        <a className="hover:border-2 border-white border-solid w-[60px] font-bold mt-[8px] mb-[2px]  pt-[6px] pl-[6px] h-[34px] text-white text-sm">Fashion</a>
                        <a className="hover:border-2 border-white border-solid w-[50px] font-bold mt-[8px] mb-[2px]  pt-[6px] pl-[6px] h-[34px] text-white text-sm">Books</a>
                        <a className="hover:border-2 border-white border-solid w-[50px] font-bold mt-[8px] mb-[2px]  pt-[6px] pl-[6px] h-[34px] text-white text-sm">Prime</a>
                    </div>
                </div>
            </div>
            
            <div className=" flex shrink grow overflow-hidden h-[30px] w-[500px]  mr-[20px]">
                <div className="flex h-[30px]">
                    <a className="flex h-[30px] " ><img className='w-[600px]' src={add.src}/></a>
                </div>
            </div>
        </div>
  )
}

export default Navbar2