import React from 'react'
import Image from 'next/image';
import {TbBorderCorners} from "react-icons/tb";
import {BsWifi} from "react-icons/bs"
import {SlPeople} from "react-icons/sl"

const FeaturedSpace = () => {
  return (
    <section className='mt-36 flex items-center mx-auto gap-[30px.]'>
        <div className='flex flex-col justify-between w-1/2'>
          <h2 className='text-5xl text-main-color font-normal leading-[1.41] max-w-[490px] mb-7'>Some good place to where can build your startup business</h2>
          <p className='leading-[2.07] text-main-color text-[17px] font-normal max-w-[490px]'>Co-working offers beautifully crafted workspaces where people can create, connect, and grow their businesses at prime locations in multiple cities.</p>
          <div className='mt-20 flex'>
            <div>
                <TbBorderCorners />
                <h4>1000 ft2</h4>
                <p>you will get 1000ft square
space facility here.</p>
            </div>
            <div>
                <SlPeople />
                <h4>80 Members</h4>
                <p>you will get advantage to live 80+ member here.</p>
            </div>
            <div>
                <BsWifi />
                <h4>100 mbps</h4>
                <p>Internet speed is much better thjan others.</p>
            </div>
          </div>
        </div>
        <div className='w-1/2'>
          <Image src={"/images/gallery/2.png"} alt='galery' width={645} height={645}/>
        </div>
    </section>
  )
}

export default FeaturedSpace