"use client";
import React, { useState } from "react";
import "tailwindcss/tailwind.css";
import cx from "classnames";
import CustomCheckbox from "./shared-resources/components/CustomCheckbox";

interface Props {}

const Home: React.FC<Props> = (props) => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className="flex flex-col justify-center items-center w-full h-[50vh]">
      <span className="text-5xl font-mono font-extrabold mb-4">
        Simplest Docs
        <span className="font-serif font-semibold"> on the web! </span>
      </span>
      <CustomCheckbox
        size="large"
        label="Yes, let's see 'em!"
        checkboxStyles={cx("rounded-lg w-[30px] h-[30px] transition-opacity")}
        className={cx("transition-opacity delay-200")}
        value={isChecked}
        onChange={() => {
          setIsChecked(!isChecked);
        }}
      />
    </div>
  );
};

export default Home;
