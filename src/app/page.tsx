import React from "react";
import "tailwindcss/tailwind.css";

interface Props {}

const Home: React.FC<Props> = (props) => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-[50vh]">
      <span className="text-5xl font-mono font-extrabold">
        Simplest Docs
        <span className="font-serif font-semibold"> on the web! </span>
      </span>
    </div>
  );
};

export default Home;
