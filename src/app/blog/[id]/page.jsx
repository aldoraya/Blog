import Image from "next/image";
import { notFound } from "next/navigation";
import React from "react";

async function getData(id) {
  const res = await fetch(`https://dooray-blog.vercel.app/api/posts/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return notFound();
  }

  return res.json();
}

export async function generateMetadata({ params }) {
  const post = await getData(params.id);
  return {
    title: post.title,
    description: post.desc,
  };
}

const BlogPost = async ({ params }) => {
  const data = await getData(params.id);

  return (
    <div className="w-full h-max">
      <div className="pt-20 md:pt-28 lg:pt-32 pb-20 px-8 md:px-10 lg:px-44">
        <div className="flex flex-col md:flex-row md:space-x-6 lg:space-x-2">
          <div className="flex flex-col justify-start md:w-[50%] space-y-4">
            <h2 className="text-lg md:text-2xl font-semibold">{data.title}</h2>
            <p className="text-sm md:text-base text-justify">{data.desc}</p>
            <div className="flex space-x-2">
              <div className="w-7 h-7">
                <div className="absolute w-7 h-7">
                  <Image
                    src={data.image}
                    className="rounded-full object-cover"
                    fill={true}
                    alt="profile-img"
                  />
                </div>
              </div>
              <p>{data.username}</p>
            </div>
          </div>
          <div className="mt-4 md:mt-0 md:flex md:justify-end md:w-[50%]">
            <Image 
            src={data.image} 
            width="400" 
            height="500"
            alt="upload-img" />
          </div>
        </div>
        <div className="block space-y-4 mt-4 text-justify text-sm md:text-base">
          {data.content.split("\n").map((paragraph, index) => (
            <p className="mb-4" key={index}>
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
