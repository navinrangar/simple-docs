import * as React from "react";
import cx from "classnames";
import CheckIcon from "@/app/assets/icons/CheckIcon";

interface Props {
  size: "large" | "small";
  name?: string;
  onChange?: (event: any) => void;
  value?: boolean;
  disabled?: boolean;
  label?: string;
  readOnly?: boolean;
  checkboxStyles?: string;
  className?: string;
}

const CustomCheckbox = ({
  onChange,
  value,
  disabled,
  label,
  name,
  readOnly = false,
  className,
  checkboxStyles,
  size,
}: Props) => {
  const animationClassName = cx(
    "absolute bg-primary/50 animate-ping rounded-full",
    { "h-8 w-8 bottom-[7px] -left-[1px]": size === "large" },
    { "h-6 w-6 bottom-[5px] -left-[2px]": size === "small" }
  );

  return (
    <div className={cx("flex relative items-center", className)}>
      <label className={cx("cursor-pointer relative")}>
        {value && <span className={`${animationClassName}`}></span>}
        {!value && <span className={`${animationClassName}`}></span>}
        <input
          readOnly={readOnly}
          name={name}
          onChange={onChange}
          checked={value}
          disabled={disabled}
          type="checkbox"
          className={cx(
            "appearance-none border rounded-md",
            value
              ? "bg-primary border-primarys"
              : "bg-white border-border-gray",
            { "h-[30px] w-[30px]": size === "large" },
            { "h-[20px] w-[20px]": size === "small" }
          )}
        />
        <CheckIcon
          className={cx(
            "fill-white absolute",
            value ? "visible" : "visible",
            { "!h-5 bottom-3 left-[5px]": size === "large" },
            { "!h-3 bottom-[10px]": size === "small" }
          )}
        />
      </label>
      {label && <p className="ml-3">{label}</p>}
    </div>
  );
};

export default CustomCheckbox;
