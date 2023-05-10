import React from 'react'
import Image from 'next/image'

const Customer = () => {
  return (
    <section className='mt-[3.75rem] flex flex-col items-center mx-auto'>
      <div>
        <p className='text-second-color font-extrabold mb-3 text-center'>Meet Our Clients</p>
        <h3>This guys are using our service and they're more than happier ever.</h3>
      </div>
      <div className='flex '>
          <Image src="/images/clients/uber.png" alt="uber" width={100} height={21}/>
          <Image src="/images/clients/google.png" alt="google" width={100} height={21} />
          <Image src="/images/clients/paypal.png" alt="paypal" width={100} height={21} />
          <Image src="/images/clients/microsoft.png" alt="microsoft" width={100} height={21} />
          <Image src="/images/clients/dribbble.png" alt="dribbble" width={100} height={21} />
      </div>
    </section>
  )
}

export default Customer