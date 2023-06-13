import Button from '@/components/Button/Button'
import Image from 'next/image'
import React from 'react'
import ContactImage from '/public/contact.png'

export const metadata = {
  title: "Blog Dooray Contact Information",
  description: "Contact Page",
};

const Contact = () => {
  return (
    <div className="w-full h-max">
      <div className="pt-24 p-10 px-44">
      <p className="text-center text-4xl font-bold">Let's Keep in Touch</p>
      <div className="flex flex-row justify-between mt-10">
        <div className="flex justify-start">
          <Image src={ContactImage} className="object-contain animate-move" height="400" width="400" />
        </div>
        <div className="flex flex-col justify-end w-[50%] h-max">
          <form action="" method="post" className="space-y-4">
            <input type="text" placeholder="name" className="w-full p-2 border border-[#bbb] outline-none bg-transparent rounded-md" />
            <input type="email" placeholder="email" className="w-full p-2 border border-[#bbb] outline-none bg-transparent rounded-md" />
            <textarea placeholder="message" className="border p-2 border-[#bbb] outline-none bg-transparent rounded-md" cols="30" rows="10"></textarea>
            <div className="block">
             <Button url="#" text="Send" />
            </div>
          </form>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Contact