import Image from "next/image";
import Link from "next/link";
import React from "react";
import Illustration from "/public/illustration.png";
import Websites from "/public/websites.jpg";
import Applications from "/public/apps.jpg";

export const metadata = {
  title: "Blog Dooray Portfolio Information",
  description: "Portfolio Page",
};

const Portfolio = () => {
  return (
    <div className="w-full h-full lg:h-[72.9vh]">
      <p className="text-sm lg:text-2xl mt-4 font-semibold text-center lg:text-left">Choose a gallery</p>
      <div className="flex flex-col md:grid md:grid-cols-2 lg:flex lg:flex-row space-y-80 lg:space-y-0 lg:space-x-72 mt-3">
        <Link href="/portfolio/illustrations" className="w-max h-auto relative">
          <div className="border border-white w-[250px] h-[300px] absolute inset-0">
            <Image
              src={Illustration}
              priority={true}
              className="object-cover"
              fill={true}
              alt="Illustration"
            />
            <p className="absolute bottom-2 right-2 font-bold text-3xl">Illustrations</p>
          </div>
        </Link>
        <Link href="/portfolio/websites" className="w-max h-auto relative">
          <div className="border border-white w-[250px] h-[300px] absolute">
            <Image
              src={Websites}
              priority={true}
              className="object-cover"
              fill={true}
              alt="Websites"
            />
            <p className="absolute bottom-2 right-2 font-bold text-3xl">Websites</p>
          </div>
        </Link>
         <Link href="/portfolio/applications" className="w-[250px] h-[300px] relative">
          <div className="border border-white w-[250px] h-[300px] absolute">
            <Image
              src={Applications}
              priority={true}
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
