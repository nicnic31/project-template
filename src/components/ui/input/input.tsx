import { forwardRef } from "react";
import cn from "classnames";
import { TextSizeName, textSizes } from "@/utils/textSizes";

type VariantName = "outlined" | "filled" | "standard";

export interface IInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: VariantName;
  textSize?: TextSizeName;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  helperText?: string;
}

const Input = forwardRef<HTMLInputElement, IInputProps>(
  (
    {
      variant = "outlined",
      textSize = "medium",
      startIcon,
      endIcon,
      helperText,
      className,
      onChange,
      ...inputProps
    },
    ref
  ) => {
    return (
      <div className="relative">
        {startIcon && <div className="absolute top-4 left-4">{startIcon}</div>}
        <input
          className={cn(
            "py-3 text-black focus:outline-0 w-full",
            variant === "outlined"
              ? "rounded border focus:border-2"
              : "rounded-t border-b focus:border-b-2",
            variant === "filled" ? "bg-light-gray" : "bg-white",
            textSizes(textSize),
            endIcon && "pl-3 pr-12",
            startIcon && "pl-12 pr-3",
            !endIcon && !startIcon && "px-3",
            helperText
              ? "border-red focus:border-dark-red"
              : "border-gray focus:border-dark-gray",
            className
          )}
          onChange={onChange}
          ref={ref}
          {...inputProps}
        />
        {helperText && (
          <p className="text-red text-xs tracking-wide font-medium">
            {helperText}
          </p>
        )}
        {endIcon && <div className="absolute top-4 right-5">{endIcon}</div>}
      </div>
    );
  }
);

Input.displayName = "Input";
export default Input;
