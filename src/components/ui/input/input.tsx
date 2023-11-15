import { ReactHTMLElement, forwardRef } from "react";
import cn from "classnames";
import { TextSizeName, textSizes } from "@/utils/textSizes";

type VariantName = "outlined" | "filled" | "standard";

export interface IInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: VariantName;
  textSize?: TextSizeName;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
}

const Input = forwardRef<HTMLInputElement, IInputProps>(
  (
    {
      variant = "outlined",
      textSize = "medium",
      startIcon,
      endIcon,
      className,
      ...inputProps
    },
    ref
  ) => {
    return (
      <div className="relative">
        {startIcon && <div className="absolute top-4 left-4">{startIcon}</div>}
        <input
          className={cn(
            "py-3 text-black border-gray focus:outline-0 focus:border-dark-gray w-full",
            variant === "outlined"
              ? "rounded border focus:border-2"
              : "rounded-t border-b focus:border-b-2",
            variant === "filled" ? "bg-light-gray" : "bg-white",
            textSizes(textSize),
            endIcon && "pl-3 pr-12",
            startIcon && "pl-12 pr-3",
            !endIcon && !startIcon && "px-3",
            className
          )}
          {...inputProps}
          ref={ref}
        />
        {endIcon && <div className="absolute top-4 right-5">{endIcon}</div>}
      </div>
    );
  }
);

Input.displayName = "Input";
export default Input;
