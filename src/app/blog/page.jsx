import Image from "next/image";
import Link from "next/link";
import React from "react";

export const metadata = {
  title: "Dooray Blog Information",
  description: "Blog Page",
};

async function getData() {
  const res = await fetch("https://dooray-blog.vercel.app/api/posts", {
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
    <div className="w-full h-max pt-24 md:pt-16">
      <div className="pb-10 px-8 md:pt-10 md:px-10 lg:px-44">
        <div className="block space-y-4">
          {data.map((item) => (
            <Link href={`/blog/${item._id}`} key={item.id}>
              <div className="block md:flex">
                <div className="flex justify-start">
                  <Image
                    src={item.image}
                    width="400"
                    height="500"
                    alt="img-1"
                  />
                </div>
                <div className="flex flex-col mt-2 lg:mt-0 md:justify-end md:w-[80%] md:p-10">
                  <h2 className="text-lg md:text-2xl font-bold">
                    {item.title}
                  </h2>
                  <p className="text-sm lg:text-base mt-2 text-justify">
                    {item.desc}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
