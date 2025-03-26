import React, { forwardRef } from "react";
import { cn } from "@/shadcn/lib/utils";
import { Button as SCNButton,  } from "@/shadcn/components/ui/button";

import { Loader } from "lucide-react";

type Variant = "filled" | "outlined" | "ghost";

type Color = "primary" | "secondary" | "info" | "success" | "error" | "warning";

type Size = "large" | "medium" | "small";

interface IButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  color?: Color;
  size?: Size;
  loading?: boolean;
  fullWidth?: boolean;
}

const fontSizes: Record<Size, string> = {
  large: "text-lg",
  medium: "text-base",
  small: "text-sm",
};

const filledStyles: Record<Color, string> = {
  primary: "bg-primary hover:bg-primary-200",
  secondary: "bg-secondary hover:bg-secondary-200",
  info: "bg-info hover:bg-info-200",
  success: "bg-success hover:bg-success-200",
  error: "bg-error hover:bg-error-200",
  warning: "bg-warning hover:bg-warning-200",
};

const fontStyles: Record<Color, string> = {
  primary: "text-primary hover:text-primary-200",
  secondary: "text-secondary hover:text-secondary-200",
  info: "text-info hover:text-info-200",
  success: "text-success hover:text-success-200",
  error: "text-error hover:text-error-200",
  warning: "text-warning hover:text-warning-200",
};

const hoverBackgroundStyles: Record<Color, string> = {
  primary: "hover:bg-outlined-primary",
  secondary: "hover:bg-outlined-secondary",
  info: "hover:bg-outlined-info",
  success: "hover:bg-outlined-success",
  error: "hover:bg-outlined-error",
  warning: "hover:bg-outlined-warning",
};

const borderStyles: Record<Color, string> = {
  primary: "border-primary hover:border-primary-200",
  secondary: "border-secondary hover:border-secondary-200",
  info: "border-info hover:border-info-200",
  success: "border-success hover:border-success-200",
  error: "border-error hover:border-error-200",
  warning: "border-warning hover:border-warning-200",
};

const Button = forwardRef<HTMLButtonElement, IButtonProps>(
  (
    {
      children,
      className,
      variant = "filled",
      size = "small",
      color = "primary",
      disabled = false,
      loading = false,
      fullWidth = true,
      ...props
    },
    ref
  ) => {
    return (
      <SCNButton
        ref={ref}
        disabled={disabled || loading}
        className={cn(
          "font-light tracking-wide flex flex-row gap-2 h-fit",
          fontSizes[size],
          fullWidth ? "w-full" : "w-fit",
          variant === "outlined" && "border",
          variant === "filled" ? filledStyles[color] : "bg-transparent",
          variant === "filled" ? "text-white" : fontStyles[color],
          variant !== "filled" && hoverBackgroundStyles[color],
          !disabled &&
            !loading &&
            variant === "outlined" &&
            borderStyles[color],
          disabled || loading ? "hover:font-light" : "hover:font-medium",
          disabled || loading ? "cursor-not-allowed" : "cursor-pointer",
          (loading || disabled) &&
            (variant === "filled" || variant === "ghost") &&
            "bg-disabled text-typography-100",
          (loading || disabled) &&
            variant === "outlined" &&
            "border-secondary-100 text-typography-disabled hover:bg-transparent",
          className
        )}
        {...props}
      >
        {loading ? (
          <div className="flex flex-row items-center justify-center gap-1">
            <Loader
              size={16}
              className={cn(
                "animate-spin",
                variant !== "outlined"
                  ? "text-typography-disabled"
                  : "text-typography-100"
              )}
            />
            <p
              className={cn(
                "tracking-wide",
                fontSizes[size],
                variant !== "outlined"
                  ? "text-typography-disabled"
                  : "text-typography-100"
              )}
            >
              Loading
            </p>
          </div>
        ) : (
          children
        )}
      </SCNButton>
    );
  }
);

Button.displayName = "Button";

export default Button;
