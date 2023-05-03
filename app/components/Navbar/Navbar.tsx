import Image from 'next/image'
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
  return (
    <header className="flex flex-row items-center justify-between text-main-color">
      <div>
        <Image src="/images/logo.png" alt='header-logo' width="182" height="37"  />
      </div>
      <nav className='lg:flex md-hidden flex-row justify-center items-center'>
        <ul className='flex flex-row'>
          {listItem.map((item)=>(
            <li key={item.id} className='cursor-pointer mx-5 my-0 text-base text-disabled-color hover:text-main-color transition'>
              <a className='pointer font-normal text-lg leading-8'>{item.title}</a>
            </li>
          ))}
        </ul>
        <button className='flex 2xl:ml-[15rem] lg:ml-[17.75rem] px-6 py-3 text-white bg-second-color rounded-lg font-extrabold hover:bg-main-color transition-all ease-in-out duration-500'>Join us now</button>
      </nav>
      <button className='lg:hidden md-flex'><FaBars className='text-2xl'/></button>
     
    </header>
  )
}
