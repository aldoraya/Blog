import Image from "next/image";
import Link from "next/link";
import React from "react";
import Facebook from "/public/1.png";
import Youtube from "/public/2.png";
import Instagram from "/public/3.png";
import Twitter from "/public/4.png";

const Footer = () => {
  return (
    <div className="w-full h-max relative lg:px-44 pb-4">
      <div className="flex flex-col lg:flex-row justify-center lg:justify-between text-center lg:text-left space-y-2 lg:space-y-0">
        <div className="">2023 Dooray. All right reserved</div>
        <div className="flex justify-center lg:justify-end space-x-2">
          <Link href="/">
            <Image
              src={Facebook}
              className="object-contain"
              width={20}
              height={20}
              alt="facebook"
            />
          </Link>
         <Link href="https://www.youtube.com/channel/UCWrO1SWRKsFX2qCNSiBt5Zw">
          <Image 
            src={Youtube} 
            className="object-contain"
            width={20} 
            height={20} 
            alt="youtube" />
         </Link>
          <Link href="https://www.instagram.com/aldoraya_/">
            <Image 
              src={Instagram} 
              className="object-contain"
              width={20} 
              height={20} 
              alt="instagram" />
          </Link>
          <Link href="/">
            <Image
              src={Twitter}
              className="object-contain" 
              width={20} 
              height={20} 
              alt="twitter" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
