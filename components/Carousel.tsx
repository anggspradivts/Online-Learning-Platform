import React from "react";
import Link from "next/link";

const filterData = [
  "Programming",
  "Marketing",
  "Engineering",
  "Design",
  "Photography",
];

const Carousel = () => {
  const filterCard = filterData.map((filter, index) => {
    return (
      <div
        key={index}
        className="category-item p-5 border-white border-2 hover:backdrop-blur-xl transition-all duration-300"
      >
        <Link href={`/courses/category/${filter}`}>{filter}</Link>
      </div>
    );
  });

  return (
    <div className="header text-white">
      <div className="header-container p-10 flex justify-center items-center">
        <div className="text-3xl font-bold">Enhance Your Skills</div>
      </div>
      <div className="text-center">
        <p>Start your journey by upgrading some skills</p>
      </div>
      <div className="category-list flex justify-center gap-5 pt-10">
        {filterCard}
      </div>
      <div className="flex justify-center py-10">
        <button className="p-2 border-2 border-white mt-40 rounded-sm hover:text-orange-400 hover:backdrop-blur-xl transition-all duration-300">Discover More</button>
      </div>
    </div>
  );
};

export default Carousel;
