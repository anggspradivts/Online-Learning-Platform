import React from "react";
import Image from "next/image";
import MyBtn from "@/components/MyBtn"


const MentorSec = () => {
  return (
    <div className="my-40">
      <div className="text-center">
        <h1  className="text-3xl font-bold">Contribute As A Mentor</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2">
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
          <div className="">
            <MyBtn name={"Start"}/>
          </div>
        </div>
        <div className="intro-image h-full md:h-1/2 lg:h-full w-full p-10">
          <Image
            width={400}
            height={400}
            alt="course"
            src="/course-image.jpg"
            objectFit="cover"
            className="w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default MentorSec;
