import Image from 'next/image'
import React from 'react'
import {BiMap} from "react-icons/bi"
const Header = () => {

  const city:{id: number, name: String}[] =[
    {
      id:0,
      name:"Brooklyn, New york"
    },
    {
      id:1,
      name:"Atlanta, Georgia"
    },
    {
      id:2,
      name:"Minneapolis, Minnesota"
    },
    {
      id:3,
      name:"Chicago, Illinois"
    }
  ]

  return (
    <section  className='mt-28 mb-[11.25rem]'>
       <div className='bgImage'></div>
       <div className="bg-white w-full md:w-1/2 py-12 px-[5rem]">
        <h3 className="text-5xl md:text-2xl md:leading-[1.2] lg:text-5xl lg:leading-[1.57] font-bold text-main-color ">Coworking space that
          will feel like home.</h3>
        <p className="text-lg leading-[2.48]  font-normal text-main-color mt-5 mb-10 max-w-[440px]">Whether you’re an established enterprise or a growing startup, discover spaces that inspire which will best your most impactful work.</p>
        <div className='flex flex-col'>
          <div className='w-full relative'>
            <BiMap className='absolute text-4xl font-normal text-disabled-color top-1/4 left-3'/>
            <label htmlFor="country" className='absolute top-2 left-[4.4rem]'>Find Workspace</label>
            <select name="country" id="country" className='min-h-[75px] border-second-color border-2 rounded-[5px] px-16 pt-4 font-bold w-full'>
              {city.map((c)=>(
                <option key={c.id}>{c.name}</option>
              ))}
            </select>
          </div>
          <button className='w-full bg-second-color text-white mt-5 rounded-[5px] font-bold text-xl min-h-[60px] '>Subscribe</button>
        </div>
       </div>
    </section>
  )
}

export default Header