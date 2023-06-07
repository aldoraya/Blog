import Button from "@/components/Button/Button";
import Image from "next/image";
import React from "react";
import { items } from "./data.js";
import { notFound } from "next/navigation";

const getData = (cat) => {
  const data = items[cat];

  if (data) {
    return data
  }

  return notFound();
};

const Category = ({ params }) => {
  const data = getData(params.category);

  return (
    <div>
      <p className="text-2xl mt-4 font-semibold text-green-400">
        {params.category}
      </p>
      {data.map((item) => (
        <div className="space-y-10" key={item.id}>
          <div className={`mt-10 flex ${item.id % 2 === 1 ? 'flex-row-reverse' : 'flex-row'}`}>
            <div className="flex flex-col justify-start w-[50%] space-y-4 mt-24">
              <h2 className="text-2xl font-bold">{item.title}</h2>
              <p className="text-justify">{item.desc}</p>
              <Button url="#" text="Learn More" />
            </div>
            <div className={`${item.id % 2 === 1 ? 'flex justify-start w-[50%] h-[25rem]' : 'flex justify-end w-[50%] h-[25rem]'}`}>
              <div className="w-[30rem] h-[25rem] absolute">
                <Image src={item.image} fill={true} alt="illustration" />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Category;
