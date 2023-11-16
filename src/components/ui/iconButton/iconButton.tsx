"use client"
import { forwardRef } from "react";
import cn from "classnames";

export type ColorNames =
  | "primary"
  | "success"
  | "danger"
  | "warning"
  | "white"
  | "default";

export type IconButtonSizes = "small" | "medium" | "large";

const colors = (color: ColorNames) => {
  switch (color) {
    case "primary":
      return "bg-brown hover:bg-dark-brown";
    case "success":
      return "bg-green hover:bg-dark-green";
    case "danger":
      return "bg-red hover:bg-dark-red";
    case "warning":
      return "bg-yellow hover:bg-dark-yellow";
    case "default":
      return "bg-blue hover:bg-dark-blue";
    default:
      return "bg-white hover:bg-gray";
  }
};

const sizes = (size: IconButtonSizes) => {
  if (size === "small") {
    return "p-2";
  } else if (size === "medium") {
    return "p-3";
  } else {
    return "p-4";
  }
};

export interface IIconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  color?: ColorNames;
  size?: IconButtonSizes;
}

const IconButton = forwardRef<HTMLButtonElement, IIconButtonProps>(
  (
    {
      color = "white",
      size = "small",
      onClick,
      className,
      children,
      ...iconButtonProps
    },
    ref
  ) => {

    return (
      <button
        className={cn(
          "rounded-full text-center hover:translate-y-1 hover:scale-110 duration-300",
          colors(color),
          color === "white" ? "text-dark-gray" : "text-white",
          sizes(size),
          className
        )}
        onClick={onClick}
        ref={ref}
        {...iconButtonProps}
      >
        {children}
      </button>
    );
  }
);

IconButton.displayName = "IconButton";
export default IconButton;
