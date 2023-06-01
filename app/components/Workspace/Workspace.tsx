import React from 'react'
import Image from "next/image";

const Workspace = () => {
  return (
    <section className="mt-[145px] flex flex-col items-center text-center">
        <div >
            <h3 className="text-second-color text-xl mb-[10px]">
                Working Space
            </h3>
            <p className="mb-[2rem] text-[30px] text-disabled-color font-normal">
                Let’s meet our interior room decoration
            </p>
        </div>
        <div className="flex gap-[30px]">
            <div className="flex flex-col gap-[30px]">
                <div className="relative workspace-img">
                    <Image width={420} height={400} src={"/images/gallery/1.png"} alt={"photo1"} className="rounded-[8px]"/>
                    <p className="text-white text-xl font-normal absolute bottom-6 left-6 z-10">Front working space</p>
                </div>
                <div className="relative workspace-img">
                    <Image width={420} height={550} src={"/images/gallery/4.png"} alt={"photo2"} className="rounded-[8px]"/>
                    <p className="text-white text-xl font-normal absolute bottom-6 left-6 z-10">Guest rest room</p>
                </div>
            </div>
            <div className="flex flex-col gap-[30px]">
                <div className="relative workspace-img">
                    <Image width={420} height={530} src={"/images/gallery/2.png"} alt={"photo3"} className="rounded-[8px]"/>
                    <p className="text-white text-xl font-normal absolute bottom-6 left-6 z-10">Meeting corner</p>
                </div>
                <div className="relative workspace-img">
                    <Image width={420} height={420} src={"/images/gallery/5.png"} alt={"photo4"} className="rounded-[8px]"/>
                    <p className="text-white text-xl font-normal absolute bottom-6 left-6 z-10">Single working space</p>
                </div>
            </div>
            <div className="flex flex-col gap-[30px]">
                <div className="relative workspace-img">
                    <Image width={420} height={450} src={"/images/gallery/3.png"} alt={"photo5"} className="rounded-[8px]"/>
                    <p className="text-white text-xl font-normal absolute bottom-6 left-6 z-10">Guest meeting room</p>
                </div>
                <div className="relative workspace-img">
                    <Image width={420} height={500} src={"/images/gallery/6.png"} alt={"photo6"} className="rounded-[8px]"/>
                    <p className="text-white text-xl font-normal absolute bottom-6 left-6 z-10">Kitchen room</p>
                </div>
            </div>
        </div>
        <button className="mt-[20px] w-full min-h-[60px] text-[1rem] bg-[#EDF0F2] hover:bg-second-color hover:text-white text-[#343D48] font-bold transition ease-linear duration-300 rounded-[8px]">Explore More ></button>
    </section>
  )
}

export default Workspace
