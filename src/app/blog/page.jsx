import Image from "next/image";
import Link from "next/link";
import React from "react";

const Blog = () => {
  return (
    <div className="w-full h-max">
      <div className="pt-24 p-10 px-44">
        <div className="block">
          <Link href="/blog/1">
            <div className="flex">
              <div className="flex justify-start w-[20%}">
                <Image
                  src="https://images.pexels.com/photos/20967/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  width="400"
                  height="500"
                  alt="img-1"
                />
              </div>
              <div className="flex flex-col justify-end w-[80%] p-10">
                <h2 className="text-2xl font-bold text-white">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Commodi.
                </h2>
                <p className="mt-2 text-justify">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
                  doloremque quos quia cupiditate nobis pariatur architecto
                  placeat exercitationem. Repudiandae aspernatur tenetur vero
                  possimus quas. Totam impedit vero ab facilis reiciendis?
                </p>
              </div>
            </div>
          </Link>
          <Link href="/blog/2">
            <div className="flex mt-10">
              <div className="flex justify-start w-[20%}">
                <Image
                  src="https://images.pexels.com/photos/11775858/pexels-photo-11775858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  width="400"
                  height="500"
                  alt="img-2"
                />
              </div>
              <div className="flex flex-col justify-end w-[80%] p-10">
                <h2 className="text-2xl font-bold text-white">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Commodi.
                </h2>
                <p className="mt-2 text-justify">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
                  doloremque quos quia cupiditate nobis pariatur architecto
                  placeat exercitationem. Repudiandae aspernatur tenetur vero
                  possimus quas. Totam impedit vero ab facilis reiciendis?
                </p>
              </div>
            </div>
          </Link>
          <Link href="/blog/3">
            <div className="flex mt-10">
              <div className="flex justify-start w-[20%}">
                <Image
                  src="https://images.pexels.com/photos/2574476/pexels-photo-2574476.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  width="400"
                  height="500"
                  alt="img-3"
                />
              </div>
              <div className="flex flex-col justify-end w-[80%] p-10">
                <h2 className="text-2xl font-bold text-white">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Commodi.
                </h2>
                <p className="mt-2 text-justify">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
                  doloremque quos quia cupiditate nobis pariatur architecto
                  placeat exercitationem. Repudiandae aspernatur tenetur vero
                  possimus quas. Totam impedit vero ab facilis reiciendis?
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Blog;
