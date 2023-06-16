import Button from "@/components/Button/Button";
import Image from "next/image";
import Hero from "/public/hero.png";

export default function Home() {
  return (
    <div className="w-full h-screen lg:h-[93.7vh] p-6 lg:p-10 px-8 md:px-20 lg:px-44 flex justify-between">
      <div className="flex flex-col justify-center lg:justify-start space-y-6 mt-5 md:mt-10 lg:mt-20">
        <div className="flex lg:hidden md:justify-center justify-end mt-10 lg:mt-20 z-0">
          <Image
            src={Hero}
            priority={true}
            className="object-contain animate-move"
            width={500}
            height={500}
            alt="hero"
          />
        </div>
        <h1 className="text-xl md:text-3xl lg:text-5xl w-full lg:w-[60%] font-bold leading-6 lg:leading-[3.5rem] mt-8 text-center lg:text-left">
          <span className="inline w-full bg-clip-text bg-gradient-to-b from-green-400 to-[#bbb] text-transparent">
            Better design
          </span>{" "}
          for your digital products.
        </h1>
        <p className="w-full lg:w-[64%] text-center lg:text-left text-sm md:text-base">
          Turning your idea into Reality. We bring together the teams from the
          global tech industry.
        </p>
        <div className="flex flex-1 justify-center lg:justify-start text-sm md:text-base">
          <Button url="/contact" text="see our works" />
        </div>
      </div>
      <div className="hidden lg:flex justify-end mt-20">
        <Image
          src={Hero}
          priority={true}
          className="object-contain animate-move"
          width={600}
          height={600}
          alt="hero"
        />
      </div>
    </div>
  );
}
