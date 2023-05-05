"use client"
import Image from 'next/image'
import { useState, useEffect, useRef } from 'react'
import {FaBars} from "react-icons/fa"
import {RxCross2} from "react-icons/rx"

export const Navbar = () => {
  const listItem:{id: number,title: string}[] = [
    {
      id:0,
      title:"Home"
    },
    {
      id:1,
      title:"Clients"
    },
    {
      id:2,
      title:"Feature"
    },
    {
      id:3,
      title:"Gallery"
    },
    {
      id:4,
      title:"Pricing"
    },
    {
      id:5,
      title:"Blog"
    }
  ]

  const windowSize = useRef([window.innerWidth, window.innerHeight]);
  const[openMenu,setOpenMenu] = useState(false);
 

  useEffect(()=>{console.log(windowSize.current[0])},[windowSize.current[0]])
  return (
    <header className="flex justify-between items-center 2xl:max-w-[1380px] mx-auto text-main-color relative ">
      <div>
        <Image src="/images/logo.png" alt='header-logo' width="182" height="37"  />
      </div>
      <nav className={`flex items-center justify-between gap-[15rem] ${openMenu && 'open'}  max-md:mobile-menu-open`}>
        <ul className={`flex md:gap-12 flex-col md:flex-row gap-8 `}>
          {listItem.map((item)=>(
            <li key={item.id} className='text-disabled-color hover:text-main-color cursor-pointer duration-500 ease-in-out'>
              <a className='text-base'>{item.title}</a>
            </li>
          ))}
        </ul>
        <button className='py-3 px-6 text-white bg-second-color hover:bg-main-color rounded-lg ease-in-out duration-500 text-base font-extrabold max-md:w-full max-md:mt-8'>Join us now</button>
      </nav>
      <button className={`hidden max-md:mobile-bars`} onClick={()=>setOpenMenu(!openMenu)}>{openMenu?<RxCross2 className='text-2xl'/>:<FaBars className='text-2xl'/>}</button>
    </header>
  )
}
