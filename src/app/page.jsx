import Button from '@/components/Button/Button'
import Image from 'next/image'
import Hero from '/public/hero.png'

export default function Home() {
  return (
    <div className='w-full h-max p-10 px-44 flex justify-between'>
      <div className="flex flex-col justify-start space-y-6 mt-20">
        <h1 className="text-5xl w-[60%] font-bold leading-[3.5rem] mt-8">
          <span className="inline w-full bg-clip-text bg-gradient-to-b from-green-400 to-[#bbb] text-transparent">
            Better design</span> for your digital products.
        </h1>
        <p className="w-[64%]">
          Turning your idea into Reality. We bring together the teams from the global tech industry.
        </p>
        <Button url="/contact" text="see our works" />
      </div>
      <div className="flex justify-end mt-20">
        <Image src={Hero} className="object-contain animate-move" width={600} height={600} />
      </div>
    </div>
  )
}
