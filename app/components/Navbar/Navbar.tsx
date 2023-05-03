"use client"
import Image from 'next/image'
import { useState, useEffect } from 'react'
import {FaBars} from "react-icons/fa"

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

  const[windowSize,setWindowSize] = useState(window.innerWidth);

  useEffect(()=>{
      setWindowSize(window.innerWidth)
  },[window.innerWidth])

  return (
    <header className="flex justify-between items-center 2xl:max-w-[1380px] mx-auto text-main-color">
      <div>
        <Image src="/images/logo.png" alt='header-logo' width="182" height="37"  />
      </div>
      <nav className={`flex items-center justify-between gap-[10rem] ${windowSize<768?'mobile-menu':''}`}>
        <ul className='flex gap-12'>
          {listItem.map((item)=>(
            <li key={item.id} className='text-disabled-color hover:text-main-color cursor-pointer duration-500 ease-in-out'>
              <a className='text-lg'>{item.title}</a>
            </li>
          ))}
        </ul>
        <button className='py-3 px-6 text-white bg-second-color hover:bg-main-color rounded-lg ease-in-out duration-500 text-base font-extrabold'>Join us now</button>
      </nav>
      <button className={`${windowSize<768?'mobile-bars':'hidden'}`}><FaBars className='text-2xl'/></button>
    </header>
  )
}
