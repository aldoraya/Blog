import Button from "@/components/Button/Button";
import Image from "next/image";
import React from "react";

export const metadata = {
  title: "Blog Dooray About Information",
  description: "About Page",
};

const ABout = () => {
  return (
    <div className="w-full h-full md:h-[110vh] px-8 md:px-20 lg:px-44 pb-10 md:pb-0">
      <div className="w-full h-52 relative">
        <Image
          src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          fill={true}
          className="object-cover mt-24 z-0"
          alt="team"
        />
      </div>
      <div className="md:flex md:space-x-10 lg:space-x-20 pt-32 text-sm md:text-base">
        <div className="md:w-[50%] h-max space-y-4 text-sm text-justify">
          <h2 className="text-lg md:text-xl lg:text-2xl font-bold">
            Who are we?
          </h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente,
            itaque beatae? Modi, porro ut, optio nihil veniam magni libero at
            corrupti
          </p>
          <p>
            {" "}
            eaque molestias quasi facere culpa non exercitationem eveniet
            laudantium incidunt repellat. Quasi illum eos vero, inventore totam
            eum tenetur delectus, aliquid molestias mollitia blanditiis quis
            atque. Voluptas, natus iusto?
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam
            quaerat aliquid veniam dolorem suscipit, nostrum, illum sint quos
            quas vero nihil voluptatum veritatis? Exercitationem voluptates in
            doloribus recusandae?
          </p>
        </div>
        <div className="md:w-[50%] h-max space-y-4 text-sm text-justify pt-10 md:pt-0">
          <h2 className="text-lg md:text-xl lg:text-2xl font-bold">
            What we do?
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
            reprehenderit natus tempora, vitae tempore quod dolores est ad,
            quidem totam sequi placeat commodi quasi temporibus unde autem
            voluptates, ducimus veniam!
          </p>
          <p>- Creative ilustration</p>
          <p>- Dynamic website</p>
          <p>- Fast and handy Mobile Apps</p>
          <div className="mt-4 flex flex-1 justify-center md:justify-start">
            <Button url="/contact" text="Contact" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ABout;
