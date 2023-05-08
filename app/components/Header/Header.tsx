import Image from 'next/image'
import React from 'react'

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
    <section  className='mt-28'>
       <div className='bgImage'></div>
       <div className="bg-white w-1/2 py-12 px-[5rem]">
        <h3 className="text-5xl font-bold leading-[1.57] text-main-color ">Coworking space that
          will feel like home.</h3>
        <p className="text-lg font-normal text-main-color mt-5 mb-10 leading-[2.48] max-w-[440px]">Whether you’re an established enterprise or a growing startup, discover spaces that inspire which will best your most impactful work.</p>
        <div className='flex flex-col gap-5'>
          <select name="country" id="country">
            {city.map((c)=>(
              <option key={c.id}>{c.name}</option>
            ))}
          </select>

          <button>Subscribe</button>
        </div>
       </div>
    </section>
  )
}

export default Header