'use client'
import React, { useRef } from 'react'
import Image from 'next/image';
import {TbBorderCorners} from "react-icons/tb";
import {BsWifi} from "react-icons/bs"
import {SlPeople} from "react-icons/sl"
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { EffectFade, Navigation, Pagination, Autoplay } from "swiper";

import slider1 from "public/images/features/1.png";
import slider2 from "public/images/features/2.webp";
import slider3 from "public/images/features/3.png";


const gallery: {id: number, image: any, title: String, desc: String}[] = [
  {
    id: 1,
    image: slider1,
    title: 'Kin Co-working Space',
    desc: '442 Broadway, New York',
  },
  {
    id: 2,
    image: slider2,
    title: 'Kin Co-working Space',
    desc: '212 Broadway, Jamaica',
  },
  {
    id: 3,
    image: slider3,
    title: 'Kin Co-working Space',
    desc: '212 Broadway, Houston',
  },
]


const FeaturedSpace = () => {

  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  return (
    <section className='mt-36 flex items-center mx-auto gap-[42px]'>
        <div className='flex flex-col justify-between w-1/2'>
          <h2 className='text-5xl text-main-color font-normal leading-[1.41] max-w-[490px] mb-7'>Some good place to where can build your startup business</h2>
          <p className='leading-[2.07] text-main-color text-[17px] font-normal max-w-[490px]'>Co-working offers beautifully crafted workspaces where people can create, connect, and grow their businesses at prime locations in multiple cities.</p>
          <div className='mt-20 flex gap-[30px]'>
            <div>
                <TbBorderCorners className='text-second-color text-4xl mb-1'/>
                <h4 className='text-xl'>1000 ft2</h4>
                <p className='text-sm text-disabled-color leading-[22px]'>you will get 1000ft square
space facility here.</p>
            </div>
            <div>
                <SlPeople className='text-second-color text-4xl mb-1'/>
                <h4 className='text-xl'>80 Members</h4>
                <p className='text-sm text-disabled-color leading-[22px]'>you will get advantage to live 80+ member here.</p>
            </div>
            <div>
                <BsWifi className='text-second-color text-4xl mb-1'/>
                <h4 className='text-xl'>100 mbps</h4>
                <p className='text-sm text-disabled-color leading-[22px]'>Internet speed is much better thjan others.</p>
            </div>
          </div>
        </div>
        <div className='w-1/2'>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          effect={"fade"}
          navigation={false}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay,EffectFade, Navigation, Pagination]}
          onAutoplayTimeLeft={onAutoplayTimeLeft}
          className="mySwiper"
      >
        {gallery.map((item)=>(
          <SwiperSlide>
            <Image src={item.image} width={645} height={645} alt='Gallery'/>
          </SwiperSlide>
        ))}
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
        </div>
    </section>
  )
}

export default FeaturedSpace