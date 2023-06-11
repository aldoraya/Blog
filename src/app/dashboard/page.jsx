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
      e.target.reset()
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
        {isLoading
          ? "loading"
          : data?.map((post) => (
                <div className="flex flex-col justify-start w-[50%] h-full" key={post._id}>
                  <div className="">
                    <Image
                      src={post.image}
                      className="object-cover"
                      height="400"
                      width="400"
                    />
                  </div>
                  <h2>{post.title}</h2>
                  <button
                    onCLick={() => handleDelete(post._id)}
                    className="text-xl text-red-500 font-bold"
                  >
                    x
                  </button>
                </div>
              ))}
        <div className="flex flex-col justify-end w-[50%] h-max">
          <form onSubmit={handleSubmit} method="post" className="space-y-4">
            <h1>Add New Post</h1>
            <input
              type="text"
              placeholder="Title"
              className="w-full p-2 border border-[#bbb] text-white bg-transparent rounded-md"
            />
            <input
              type="text"
              placeholder="Desc"
              className="w-full p-2 border border-[#bbb] text-white bg-transparent rounded-md"
            />
            <input
              type="text"
              placeholder="Image"
              className="w-full p-2 border border-[#bbb] text-white bg-transparent rounded-md"
            />
            <textarea
              placeholder="Content"
              className="border p-2 border-[#bbb] text-white bg-transparent rounded-md"
              cols="30"
              rows="10"
            ></textarea>
            <div className="block">
              <button className="px-3 py-1 bg-green-400 text-white relative bottom-1 rounded-xl">Send</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
};

export default Dashboard;
