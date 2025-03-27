import { cn } from "@/shadcn/lib/utils";
import { X } from "lucide-react";
import { ReactNode } from "react";

type Color = "primary" | "secondary" | "info" | "success" | "error" | "warning";

type Variant = "filled" | "outlined";

interface ChipProps {
  label: string;
  variant?: Variant;
  color?: Color;
  icon?: ReactNode;
  disabled?: boolean;
  onClose?: () => void;
}

const filledBg: Record<Color, string> = {
  primary: "bg-primary",
  secondary: "bg-secondary",
  info: "bg-info",
  success: "bg-success",
  error: "bg-error",
  warning: "bg-warning",
};

const outlinedStyles: Record<Color, string> = {
  primary: "border-primary text-primary",
  secondary: "border-secondary text-secondary",
  info: "border-info text-info",
  success: "border-success text-success",
  error: "border-error text-error",
  warning: "border-warning text-warning",
};

function Chip({
  label,
  icon,
  onClose,
  color = "primary",
  variant = "outlined",
  disabled = false,
}: ChipProps) {
  return (
    <div
      className={cn(
        "w-fit flex flex-row gap-3 items-center px-3 py-2 rounded-md",
        disabled ? "opacity-50" : "opacity-100",
        variant === "filled" && !disabled && "text-typography",
        variant === "filled" && !disabled && filledBg[color],
        variant === "filled" &&
          disabled &&
          "bg-typography-disabled text-secondary-100",
        variant === "outlined" && !disabled && "bg-transparent border",
        variant === "outlined" && !disabled && outlinedStyles[color],
        variant === "outlined" &&
          disabled &&
          "border border-typography-disabled"
      )}
    >
      <div className="flex flex-row items-center gap-1">
        {icon && icon}
        <p className="text-xs">{label}</p>
      </div>

      {onClose && (
        <button
          disabled={disabled}
          onClick={onClose}
          className={cn(
            "p-1 rounded-full",
            disabled
              ? "cursor-not-allowed text-secondary-100"
              : "cursor-pointer text-secondary-200 hover:bg-secondary-200/80 hover:text-typography-100"
          )}
        >
          <X size={11} />
        </button>
      )}
    </div>
  );
}

export default Chip;
