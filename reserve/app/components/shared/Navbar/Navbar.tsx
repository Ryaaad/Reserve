"use client"
import { useState } from 'react';
import Currency from "../../../../public/Images/Navbar/Currency.svg"
import Sun from "../../../../public/Images/Navbar/Sun.svg"
import Moon from "../../../../public/Images/Navbar/Moon.svg"
import Lang from "../../../../public/Images/Navbar/Lang.svg"
import arrowDown from "../../../../public/Images/Navbar/arrowDown1.svg"
import Notif from "../../../../public/Images/Navbar/Notif.svg"
import ppf from "../../../../public/Images/Navbar/person.png"
import Stays from "../../../../public/Images/Navbar/Stays.svg"
import Exp from "../../../../public/Images/Navbar/Exp.svg"
import Image from 'next/image';
import Fis from "../../../../public/Images/Navbar/Fis.svg"
import Eur from "../../../../public/Images/Navbar/Euro.svg"
import Usd from "../../../../public/Images/Navbar/USD.svg"
import SAR from "../../../../public/Images/Navbar/SAR.svg"
import GBF from "../../../../public/Images/Navbar/GBF.svg"
import Type from './TravelsType';

const Navbar = () => {
  const [TravelersEvent,setTravelersEvent]=useState(false)
  const [CurrencyEvent,setCurrencyEvent]=useState(false)
  const [LanguageEvent,setLanguageEvent]=useState(false)
  const [NotifEvent,setNotif]=useState(false)
  const [BlackTheme,setBlackTheme]=useState(false)
    return ( 
       <div className="fixed top-0 bg-transparent flex items-center justify-between p-6 px-13 border-b border-[#e5e7eb] w-full ">  
       <div className="flex items-center gap-9">
       <div className="flex items-center gap-4 border-r border-r-gray-300 pr-10 ">
       <Image alt='Fis' src={Fis} className='w-24'></Image>
       {/* <h1 className="text-4xl text-[#1f2937] font-bold"> .fis</h1> */}
       </div>

       <div className="flex items-center gap-2 cursor-pointer relative "  
       onClick={()=> setTravelersEvent(prev=>prev=!prev) }
       >
        <h1 className="text-[#111827] font-semibold"> Travelers </h1>
        {  !TravelersEvent ?  <Image alt='ArrowDown' className='w-5 ' src={arrowDown}></Image> :   <Image alt='ArrowUp'  src={arrowDown}  className='rotate-180 w-5 ' ></Image>  }
      { TravelersEvent && <div className="absolute top-14 right-[50%] translate-x-[50%] flex flex-col gap-4 p-4 rounded-2xl bg-white ring-1 ring-black ring-opacity-5 ">
      <Type Name='Stays' desc='Stays rental description' img={Stays} ></Type>
      <Type Name='Things to do' desc='Tour and experiences' img={Exp} ></Type>
      </div>
      }
       </div>
       </div>
        <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 cursor-pointer relative "  
        onClick={()=> setCurrencyEvent(prev=>prev=!prev) }
       >
       <Image alt='Currency' className='w-5' src={Currency}></Image>
       
        <h1 className="text-[#111827] font-semibold text-sm "> Currency </h1>
        {  !CurrencyEvent ?   <Image alt='ArrowDown' className='w-4' src={arrowDown}></Image> :   <Image alt='ArrowUp'  src={arrowDown}  className='rotate-180 w-4' ></Image> }
      { CurrencyEvent && <div className="absolute top-14 right-[50%] translate-x-[50%] flex flex-col gap-1 p-4 rounded-2xl bg-white ring-1 ring-black ring-opacity-5 ">
    <div className="flex items-center gap-2 p-2 rounded-md font-semibold uppercase bg-[#f3f4f6] w-28 text-sm hover:bg-[#f3f4f6] ">
    <Image alt='EUR' className='w-5' src={Eur} />
      <h1 className="">Eur</h1>
    </div>
    <div className="flex items-center gap-2 p-2 rounded-md uppercase hover:bg-[#f3f4f6] w-28 text-sm  ">
    <Image alt='USD' className='w-5' src={Usd} />
      <h1 className="">usd</h1>
    </div>
    <div className="flex items-center gap-2 p-2 rounded-md uppercase hover:bg-[#f3f4f6] w-28 text-sm  ">
    <Image alt='GBF' className='w-5' src={GBF} />
      <h1 className="">Gbf</h1>
    </div>
    <div className="flex items-center gap-2 p-2 rounded-md uppercase hover:bg-[#f3f4f6] w-28 text-sm  ">
    <Image alt='SAR' className='w-5' src={SAR} />
      <h1 className="">sar</h1>
    </div>
    
      </div>
      }
       </div>
       <div className="flex items-center gap-2 cursor-pointer relative"  
        onClick={()=> setLanguageEvent(prev=>prev=!prev) }
       >
       <Image alt='Lang' className='w-5' src={Lang}></Image>
       
        <h1 className="text-[#111827] font-semibold text-sm "> Language </h1>
        {  !LanguageEvent ?   <Image alt='ArrowDown' className='w-4' src={arrowDown}></Image> :   <Image alt='ArrowUp'  src={arrowDown}  className='rotate-180 w-4' ></Image> }
        { LanguageEvent && <div className="absolute top-14 right-0 h-44 flex flex-col gap-4 p-4 rounded-2xl bg-white ring-1 ring-black ring-opacity-5 w-64">
  
      </div>
      }
       </div>
       <button className="rounded-full font-semibold border  text-[#1f2937] border-[#d1d5db]  hover:border-[#9ca3af] py-2 px-4 text-sm ">List your property</button>
       <div className="flex items-center ">
       <button className="rounded-full p-3 hover:bg-[#f3f4f6] "
       onClick={()=>setBlackTheme(prev=>prev=!prev)}
       >
      { !BlackTheme ? <Image alt='Sun' src={Sun}></Image> : <Image alt='Moon' src={Moon}></Image> }
       </button>
       <button className="rounded-full p-3 hover:bg-[#f3f4f6] "
       onClick={()=>setNotif(prev=>prev=!prev)}
       >
      <Image alt='Notif' src={Notif}></Image>
       </button>
       <div className="p-3">
       <Image alt='ppf' src={ppf} className='rounded-full w-9 ' ></Image>
       </div>
       </div>
      
        </div>
       </div>
     );
}
 
export default Navbar;