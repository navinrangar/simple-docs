import React from "react";
import cx from "classnames";

interface Props {
  className?: string;
}

const CheckIcon: React.FC<Props> = ({ className }) => {
  return (
    <svg className={cx("h-5 w-5", className)} viewBox="0 0 25 25">
      <defs>
        <clipPath id="clip-path">
          <rect
            id="Rectangle_1317"
            data-name="Rectangle 1317"
            width="25"
            height="25"
            transform="translate(-0.217)"
            fill="#5dff00"
            stroke="#707070"
            stroke-width="1"
          />
        </clipPath>
      </defs>
      <path
        id="check-solid"
        d="M24.744,5.881a1.774,1.774,0,0,1,0,2.528L10.3,22.693a1.822,1.822,0,0,1-2.556,0L.525,15.551a1.774,1.774,0,0,1,0-2.528,1.822,1.822,0,0,1,2.556,0L9.027,18.9,22.194,5.881a1.822,1.822,0,0,1,2.556,0Z"
        fill="current"
      />
    </svg>
  );
};

export default CheckIcon;
