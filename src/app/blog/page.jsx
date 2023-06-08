import Image from "next/image";
import Link from "next/link";
import React from "react";

export const metadata = {
  title: "Dooray Blog Information",
  description: "Blog Page",
};


async function getData() {
  const res = await fetch("http://localhost:3000/api/posts", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data!");
  }

  return res.json();
}

const Blog = async () => {
  const data = await getData();
  
  return (
    <div className="w-full h-max">
     {data.map((item) => (
       <div className="pt-24 p-10 px-44">
       <div className="block">
         <Link href={`/blog/${item._id}`} key={item.id}>
           <div className="flex">
             <div className="flex justify-start w-[20%}">
               <Image
                 src={item.image}
                 width="400"
                 height="500"
                 alt="img-1"
               />
             </div>
             <div className="flex flex-col justify-end w-[80%] p-10">
               <h2 className="text-2xl font-bold text-white">
                  {item.title}
               </h2>
               <p className="mt-2 text-justify">
                 {item.desc}
               </p>
             </div>
           </div>
         </Link>
       </div>
     </div>
     ))}
    </div>
  );
};

export default Blog;
