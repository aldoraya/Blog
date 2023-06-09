import Image from 'next/image'
import React from 'react'
import Facebook from "/public/1.png"
import Youtube from "/public/2.png"
import Instagram from "/public/3.png"
import Twitter from "/public/4.png"

const Footer = () => {
    
  return (
    <div className="w-full h-max absolute bottom-0 px-44 pb-4">
        <div className='flex flex-row justify-between'>
            <div className="">2023 Dooray. All right reserved</div>
            <div className="flex justify-end space-x-2">
                <Image src={Facebook} className="cursor-pointer object-cover" width={15} height={15} alt="facebook" />
                <Image src={Youtube} width={15} height={15} alt="youtube" />
                <Image src={Instagram} width={15} height={15} alt="instagram" />
                <Image src={Twitter} width={15} height={15} alt="twitter" />
            </div>
        </div>
    </div>
  )
}

export default Footer