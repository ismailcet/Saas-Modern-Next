import Image from 'next/image'
import React from 'react'

export const Navbar = () => {
  const listItem:{id: number,title: string}[] = [
    {
      id:0,
      title:"Home"
    },
    {
      id:1,
      title:"Adversite"
    },
    {
      id:2,
      title:"Support"
    },
    {
      id:3,
      title:"Contact"
    },
    {
      id:4,
      title:"About us"
    }
  ]
  return (
    <header className="flex flex-row items-center justify-between">
      <div>
        <Image src="/images/logo.png" alt='header-logo' width="182" height="37"  />
      </div>
      <nav className='flex justify-center items-center'>
        <ul className='flex flex-row ml-auto'>
          {listItem.map((item)=>(
            <li key={item.id} className='cursor-pointer mx-5 my-0'>{item.title}</li>
          ))}
        </ul>
        <button className='flex ml-auto'>Join us now</button>
      </nav>
     
    </header>
  )
}
