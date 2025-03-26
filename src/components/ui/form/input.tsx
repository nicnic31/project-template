"use client";
import { ReactNode, forwardRef } from "react";
import { cn } from "@/shadcn/lib/utils";
import { Input as SCNInput } from "@/shadcn/components/ui/input";
import { Label } from "@/shadcn/components/ui/label";

type Variant = "outlined" | "filled";

type InputSize = "small" | "medium";

export interface IInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  variant?: Variant;
  inputSize?: InputSize;
  helperText?: string;
  fullWidth?: boolean;
  isRequired?: boolean;
  isOptional?: boolean;
  adornmentStart?: ReactNode;
  adornmentEnd?: ReactNode;
}

const labelSizes: Record<InputSize, string> = {
  small: "text-sm",
  medium: "text-base",
};

const Input = forwardRef<HTMLInputElement, IInputProps>(
  (
    {
      label,
      error,
      className,
      helperText,
      adornmentStart,
      adornmentEnd,
      type = "text",
      variant = "outlined",
      inputSize = "small",
      fullWidth = true,
      isRequired = false,
      isOptional = false,
      ...props
    },
    ref
  ) => {
    return (
      <div className="flex flex-col w-full gap-2">
        {label && (
          <Label
            className={cn(
              "font-light",
              error ? "text-error" : "text-typography-100",
              labelSizes[inputSize]
            )}
          >
            {label}
            {isRequired && <span className="text-error">*</span>}
            {!isRequired && isOptional && (
              <span className="ml-1">(optional)</span>
            )}
          </Label>
        )}

        <div className="relative">
          {adornmentStart && (
            <div
              className={cn("absolute left-2 top-2.5", labelSizes[inputSize])}
            >
              {adornmentStart}
            </div>
          )}
          {adornmentEnd && (
            <div
              className={cn("absolute right-3 top-2.5", labelSizes[inputSize])}
            >
              {adornmentEnd}
            </div>
          )}
          <SCNInput
            ref={ref}
            type={type}
            className={cn(
              "text-typography py-2 h-fit outline-0 ring-0 focus-visible:ring-2 focus-visible:ring-primary focus-visible:border-0 focus-visible:ring-offset-0 placeholder:text-secondary-100 placeholder:font-light",
              fullWidth ? "w-full" : "w-fit",
              variant === "filled"
                ? "border-0"
                : "border-[0.5px] border-secondary-100",
              variant === "filled"
                ? "bg-outlined-secondary disabled:bg-disabled"
                : "bg-transparent",
              inputSize === "medium"
                ? "placeholder:text-base"
                : "placeholder:text-sm",
              error && "border-2 border-error",
              adornmentStart && "pl-9",
              adornmentEnd && "pr-9",
              labelSizes[inputSize],
              className
            )}
            {...props}
          />
          {helperText && !error && (
            <p className="text-xs text-secondary-100 mt-1 font-light">
              {helperText}
            </p>
          )}
          {error && (
            <p className="text-xs text-error tracking-wide mt-1">{error}</p>
          )}
        </div>
      </div>
    );
  }
);
Input.displayName = "Input";

export default Input;
