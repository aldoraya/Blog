import Image from "next/image";
import Link from "next/link";
import React from "react";
import Illustration from "/public/illustration.png";
import Websites from "/public/websites.jpg";
import Applications from "/public/apps.jpg";

const Portfolio = () => {
  return (
    <div>
      <p className="text-2xl mt-4 font-semibold">Choose a gallery</p>
      <div className="flex space-x-72 mt-3">
        <Link href="/portfolio/illustrations" className="w-max h-[300px]">
          <div className="border border-white w-[250px] h-[300px] absolute">
            <Image
              src={Illustration}
              className="object-cover"
              fill={true}
              alt="Illustration"
            />
            <p className="absolute bottom-2 right-2 font-bold text-3xl">Illustrations</p>
          </div>
        </Link>
        <Link href="/portfolio/websites" className="w-max h-[300px]">
          <div className="border border-white w-[250px] h-[300px] absolute">
            <Image
              src={Websites}
              className="object-cover"
              fill={true}
              alt="Websites"
            />
            <p className="absolute bottom-2 right-2 font-bold text-3xl">Websites</p>
          </div>
        </Link>
         <Link href="/portfolio/applications" className="w-max h-[300px]">
          <div className="border border-white w-[250px] h-[300px] absolute">
            <Image
              src={Applications}
              className="object-cover"
              fill={true}
              alt="Applications"
            />
            <p className="absolute bottom-2 right-2 font-bold text-3xl">Application</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Portfolio;
