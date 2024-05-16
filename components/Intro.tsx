import React from "react";
import Image from "next/image"
import MyBtn from "./MyBtn"

const Intro = () => {
  return (
    <div className="py-40">
      <div className="intro-header flex justify-center">
        <h1 className="text-4xl font-bold">Find The Course That You Want</h1>
      </div>
      <div className="intro-container grid grid-cols-1 sm:grid-cols-2">
        <div className="intro-image h-full md:h-1/2  lg:h-full w-full p-10">
          <Image
            width={400}
            height={400}
            alt="course"
            src="/course-image.jpg"
            objectFit="cover"
            className="w-full h-full"
          />
        </div>
        <div className="intro-text p-10">
          <div className="">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
              labore sapiente inventore. Alias nesciunt tempora tenetur,
              voluptatem explicabo cum perspiciatis animi eius laboriosam
              inventore placeat corrupti hic? Fuga, laborum rem.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
              labore sapiente inventore. Alias nesciunt tempora tenetur,
              voluptatem explicabo cum perspiciatis animi eius laboriosam
              inventore placeat corrupti hic? Fuga, laborum rem.
            </p>
          </div>
          <div>
            <MyBtn name={"See More"}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
