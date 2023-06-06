import Image from 'next/image'
import React from 'react'

const BlogPost = () => {
  return (
    <div className="w-full h-max">
      <div className="pt-32 px-44">
        <div className="flex space-x-2">
          <div className="flex flex-col justify-start w-[50%] space-y-4">
            <h2 className="text-2xl font-semibold text-white">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h2>
            <p className="text-justify">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas porro dignissimos odio laboriosam, velit possimus praesentium 
              laudantium est excepturi provident? Eum maiores voluptas cum eius placeat esse reiciendis adipisci tenetur officia facilis.
               Dignissimos!
            </p>
            <div className="flex space-x-2">
             <div className="w-7 h-7">
             <div className="absolute w-7 h-7">
                <Image 
                src="https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
               className="rounded-full object-cover" 
                fill={true} />
              </div>
             </div>
              <p>Alexander</p>
            </div>
          </div>
          <div className="flex justify-end w-[50%]">
            <Image
            src="https://images.pexels.com/photos/11775858/pexels-photo-11775858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
            width="400"
            height="500" />
          </div>
        </div>
        <div className="block space-y-4 mt-4 text-justify">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum vero repellendus ex, doloremque iste praesentium doloribus voluptatem quaerat fugiat. Aut labore deleniti ipsa ipsum odit expedita voluptatem possimus, vitae id porro nam, laborum laudantium. Reiciendis quos, rem maiores non officiis hic enim, ipsam repudiandae nobis
             soluta temporibus facere accusantium asperiores ducimus quidem! Deserunt odit asperiores aperiam. Ducimus quasi natus rerum!</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus perferendis pariatur labore culpa ipsum modi reiciendis libero at mollitia debitis!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, quibusdam perspiciatis veniam autem recusandae minus deleniti laboriosam fugit iusto, odio saepe esse necessitatibus. Dicta accusantium quis quisquam, sit provident non molestias mollitia consequatur, facilis iste animi, tenetur pariatur neque eos enim quos eaque ut laboriosam autem beatae! Adipisci quidem animi nihil voluptas beatae neque fugit sint voluptate mollitia cupiditate quod, provident culpa, ea id, asperiores ducimus deserunt ipsam nulla iure.</p>
        </div>
      </div>
    </div>
  )
}

export default BlogPost