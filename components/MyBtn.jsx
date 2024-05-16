import React from "react";

const MyBtn = ({ name }) => {
  return (
    <button className="h-16 w-40 md:mt-10 bg-orange-400 border-2 border-black hover:bg-orange-200 transition-all duration-300 font-bold">
      {name}
    </button>
  );
};

export default MyBtn;
