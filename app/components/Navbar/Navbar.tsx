import Image from 'next/image'
import React from 'react'

export const Navbar = () => {
  return (
    <header>
      <div>
        <Image src="/images/logo.png" alt='header-logo' width="195" height="37"  />
      </div>
    </header>
  )
}
