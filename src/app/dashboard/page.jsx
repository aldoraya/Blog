"use client";

import React from "react";
import useSWR from "swr";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const Dashboard = () => {
  const session = useSession();

  const router = useRouter();

  console.log(session);

  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, mutate, error, isLoading } = useSWR(
    `/api/posts?username=${session?.data?.user.name}`,
    fetcher
  );

  if (session.status === "loading") {
    return <p>Loading...</p>;
  }

  if (session.status === "unauthenticated") {
    router?.push("/dashboard/login");
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const title = e.target[0].value;
    const desc = e.target[1].value;
    const image = e.target[2].value;
    const content = e.target[3].value;

    try {
      await fetch("/api/posts", {
        method: "POST",
        body: JSON.stringify({
          title,
          desc,
          image,
          content,
          username: session.data.user.name,
        }),
      });
      mutate();
      e.target.reset();
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await fetch(`/api/posts/${id}`, {
        method: "DELETE",
      });
      mutate();
    } catch (err) {
      console.log(err);
    }
  };

  if (session.status === "authenticated") {
    return (
      <div className="w-full h-max pt-24 p-10 px-44 flex flex-row justify-between space-x-10">
        <div className="flex flex-col justify-start w-[50%] h-full space-y-4">
        {isLoading
          ? "loading"
          : data?.map((post) => (
              
                <div
                className="flex flex-row"
                key={post._id}
              >
                  <Image
                    src={post.image}
                    className="object-cover"
                    height="200"
                    width="200"
                  />

                  <h2 className="text-center py-8 px-2">{post.title}</h2>
                  <button
                    onClick={() => handleDelete(post._id)}
                    className="text-xl text-red-500 font-bold w-1 h-1"
                  >
                    x
                  </button>
              </div>
             
            ))}
             </div>
        <div className="flex flex-col justify-end w-[50%] h-max">
          <form onSubmit={handleSubmit} method="post" className="space-y-4">
            <h1>Add New Post</h1>
            <input
              type="text"
              placeholder="Title"
              className="w-full p-2 border border-[#bbb] outline-none bg-transparent rounded-md"
            />
            <input
              type="text"
              placeholder="Desc"
              className="w-full p-2 border border-[#bbb] outline-none bg-transparent rounded-md"
            />
            <input
              type="text"
              placeholder="Add image from pexels"
              className="w-full p-2 border border-[#bbb] outline-none bg-transparent rounded-md"
            />
            <textarea
              placeholder="Content"
              className="border p-2 border-[#bbb] outline-none bg-transparent rounded-md"
              cols="52"
              rows="10"
            ></textarea>
            <div className="block">
              <button className="px-6 py-1 bg-green-400 outline-none relative bottom-1 rounded-xl text-white">
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
};

export default Dashboard;
