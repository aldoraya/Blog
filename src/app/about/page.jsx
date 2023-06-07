import Button from '@/components/Button/Button'
import Image from 'next/image'
import React from 'react'

const ABout = () => {
  return (
    <div className="w-full h-max px-44">
     <div className="w-full h-52 relative">
      <Image 
        src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
        fill={true}
        className='object-cover mt-24 z-0' 
        alt="team" />
     </div>
      <div className="flex space-x-20 pt-32">
        <div className="w-[50%] h-max space-y-4 text-sm text-justify">
          <h2 className="text-2xl font-bold">Who are we?</h2>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente, itaque beatae? Modi, porro ut, optio nihil veniam magni libero at 
            corrupti
          </p>
          <p> eaque molestias quasi facere culpa non exercitationem eveniet laudantium incidunt repellat. Quasi illum eos vero, 
            inventore totam eum tenetur delectus, aliquid molestias mollitia blanditiis quis atque. Voluptas, natus iusto?
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam quaerat aliquid veniam dolorem suscipit, nostrum, illum sint quos quas vero nihil 
            voluptatum veritatis? Exercitationem voluptates in doloribus recusandae?
          </p>
        </div>
        <div className="w-[50%] h-max space-y-4  text-sm text-justify">
          <h2 className="text-2xl font-bold">What we do?</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat reprehenderit natus tempora, vitae tempore quod dolores est ad, 
              quidem totam sequi placeat commodi quasi temporibus unde autem voluptates, ducimus veniam!
          </p>
          <p>
            - Creative ilustration
          </p>
          <p>
            - Dynamic website
          </p>
          <p>
            - Fast and handy Mobile Apps
          </p>
          <div className="mt-4">
            <Button url="/contact" text="Contact" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ABout