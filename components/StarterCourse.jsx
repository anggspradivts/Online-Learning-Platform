import React from "react";
import data from "@/data/course";
import Image from "next/image";

const StarterCourse = () => {
  const courseData = data;
  const courseCard = courseData.map((course, index) => {
    return (
      <div key={index}>
        <div className="course-container w-[300px] border-2 border-black">
          <div className="course-img w-full h-1/2 md:h-full">
            <Image
              width={400}
              height={400}
              alt="course"
              src="/course-image.jpg"
              objectFit="cover"
              className="w-full h-full"
            />
          </div>
          <div className="course-detail p-1">
            <div>
              <h1 className="font-bold">{course.title}</h1>
            </div>
            <div className="flex">
              <p className="font-extralight hover:font-bold transition-all duration-300 text-sm">{course.mentor}</p>
            </div>
            <div>
              <p className="font-extralight text-xs">{course.description}</p>
            </div>
            <div>
              <p>{course.price}</p>
            </div>
          </div>
        </div>
      </div>
    );
  });
  return (
    <div className="w-full my-20">
      <div className="text-center text-4xl font-bold py-10">
        <h1>Best Seller Course</h1>
      </div>
      <div className="flex overflow-x-scroll gap-5 mx-20">{courseCard}</div>
    </div>
  );
};

export default StarterCourse;
