import { forwardRef } from "react";
import cn from "classnames";
import { textSizes } from "@/utils/textSizes";
import SpinnerIcon from "@/components/icon/spinner";

type Sizes = "small" | "medium" | "large";

type Shapes = "pill" | "rounded" | "circle";

type VariantNames = "contained" | "outlined" | "text";

type ColorNames =
  | "primary"
  | "success"
  | "danger"
  | "warning"
  | "white"
  | "default";

const containedStyles = (color: ColorNames) => {
  switch (color) {
    case "primary":
      return "bg-brown text-white hover:bg-dark-brown";
    case "success":
      return "bg-green text-white hover:bg-dark-green";
    case "danger":
      return "bg-red text-white hover:bg-dark-red";
    case "warning":
      return "bg-yellow text-white hover:bg-dark-yellow";
    case "white":
      return "bg-yellow text-dark-gray hover:bg-light-gray";
    default:
      return "bg-blue text-white hover:bg-dark-blue";
  }
};

const borders = (color: ColorNames) => {
  switch (color) {
    case "primary":
      return "border-brown hover:border-dark-brown";
    case "success":
      return "border-green hover:border-dark-green";
    case "danger":
      return "border-red hover:border-dark-red";
    case "warning":
      return "border-yellow hover:border-dark-yellow";
    case "white":
      return "border-white";
    default:
      return "border-blue hover:border-dark-blue";
  }
};

const textColors = (color: ColorNames) => {
  switch (color) {
    case "primary":
      return "text-brown hover:text-dark-brown";
    case "success":
      return "text-green hover:text-dark-green";
    case "danger":
      return "text-red hover:text-dark-red";
    case "warning":
      return "text-yellow hover:text-dark-yellow";
    case "white":
      return "text-gray hover:text-dark-gray";
    default:
      return "text-blue hover:text-dark-blue";
  }
};

const btnShapes = (shape: Shapes) => {
  if (shape === "circle" || shape === "pill") {
    return "rounded-full";
  }
  return "rounded-md";
};

export interface IButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: ColorNames;
  variant?: VariantNames;
  shape?: Shapes;
  size?: Sizes;
  isLoading?: boolean;
  isDisabled?: boolean;
  isFullWidth?: boolean;
  children: React.ReactNode;
}

const Button = forwardRef<HTMLButtonElement, IButtonProps>(
  (
    {
      variant = "contained",
      color = "primary",
      shape = "rounded",
      size = "medium",
      isLoading = false,
      isDisabled = false,
      isFullWidth = false,
      children,
      className,
      onClick,
      ...buttonProps
    },
    ref
  ) => {
    return (
      <button
        onClick={onClick}
        ref={ref}
        className={cn(
          "p-2 flex justify-center h-fit font-medium",
          variant === "contained" ? containedStyles(color) : "bg-white",
          variant === "outlined" && borders(color),
          variant === "outlined" && "border hover:border-2",
          (variant === "outlined" || variant === "text") && textColors(color),
          btnShapes(shape),
          textSizes(size),
          (isLoading || isDisabled) && "opacity-50",
          isFullWidth ? "w-full" : "min-w-[150px]",
          className
        )}
        disabled={isLoading || isDisabled}
        {...buttonProps}
      >
        {isLoading ? (
          <div className="animate-spin w-fit">
            <SpinnerIcon />
          </div>
        ) : (
          children
        )}
      </button>
    );
  }
);

Button.displayName = "Button";
export default Button;
