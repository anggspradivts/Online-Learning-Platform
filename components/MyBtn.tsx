import React from "react";

interface MyBtnProps {
  name: string;
}

const MyBtn: React.FC<MyBtnProps> = ({ name }) => {
  return (
    <button className="h-16 w-40 md:mt-10 bg-orange-400 border-2 border-black hover:bg-orange-200 transition-all duration-300 font-bold">
      {name}
    </button>
  );
};

export default MyBtn;
