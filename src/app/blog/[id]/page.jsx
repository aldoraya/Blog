import Image from "next/image";
import { notFound } from "next/navigation";
import React from "react";

async function getData(id) {
  const res = await fetch(`http://localhost:3000/api/posts/${id}`, {
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
      <div className="pt-32 px-44">
        <div className="flex space-x-2">
          <div className="flex flex-col justify-start w-[50%] space-y-4">
            <h2 className="text-2xl font-semibold text-white">{data.title}</h2>
            <p className="text-justify">{data.desc}</p>
            <div className="flex space-x-2">
              <div className="w-7 h-7">
                <div className="absolute w-7 h-7">
                  <Image
                    src={data.image}
                    className="rounded-full object-cover"
                    fill={true}
                  />
                </div>
              </div>
              <p>{data.username}</p>
            </div>
          </div>
          <div className="flex justify-end w-[50%]">
            <Image src={data.image} width="400" height="500" />
          </div>
        </div>
        <div className="block space-y-4 mt-4 text-justify">
          <p>{data.content}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
