import Button from "@/components/Button/Button";
import Image from "next/image";
import React from "react";

const Category = ({ params }) => {
  return (
    <div>
      <p className="text-2xl mt-4 font-semibold text-green-400">
        {params.category}
      </p>
      <div className="space-y-10">
        <div className="mt-10 flex space-x-16">
          <div className="flex flex-col justify-start w-[50%] space-y-4 mt-24">
            <h2 className="text-white text-xl font-semibold">
              Creative Portfolio
            </h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus ad commodi quibusdam ab explicabo, aspernatur
              voluptatum impedit voluptates tenetur atque deleniti nemo nostrum
              labore.
            </p>
            <Button url="#" text="Learn More" />
          </div>
          <div className="flex justify-end w-[50%] h-[25rem]">
            <div className="w-[30rem] h-[25rem] absolute">
              <Image
                src="https://images.pexels.com/photos/15951554/pexels-photo-15951554/free-photo-of-silhouette-of-a-person-in-front-of-a-large-painting-in-a-museum.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                className="rounded-md"
                fill={true}
                alt="illustration"
              />
            </div>
          </div>
        </div>

        <div className="flex space-x-10">
          <div className="flex flex-col justify-start w-[50%] h-[25rem]">
            <div className="w-[30rem] h-[25rem] absolute">
              <Image
                src="https://images.pexels.com/photos/2362469/pexels-photo-2362469.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                className="rounded-md"
                fill={true}
                alt="illustration"
              />
            </div>
          </div>
          <div className="flex flex-col justify-start w-[50%] space-y-4 mt-24">
            <h2 className="text-white text-xl font-semibold">
              Minimal Single Product
            </h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus ad commodi quibusdam ab explicabo, aspernatur
              voluptatum impedit voluptates tenetur atque deleniti nemo nostrum
              labore.
            </p>
            <Button url="#" text="Learn More" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
