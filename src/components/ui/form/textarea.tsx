import { Label } from "@/shadcn/components/ui/label";
import { Textarea as SCNTextarea } from "@/shadcn/components/ui/textarea";
import { cn } from "@/shadcn/lib/utils";
import React, { forwardRef } from "react";

type Variant = "standard" | "outlined";

type Size = "large" | "medium" | "small";

export interface ITextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  size?: Size;
  variant?: Variant;
  error?: string;
  label?: string;
  helperText?: string;
  minCharacterCount?: number;
  characterCount?: number;
  showCounter?: boolean;
  isRequired?: boolean;
  isOptional?: boolean;
}

const fontsizes: Record<Size, string> = {
  large: "text-base md:text-base placeholder:text-base",
  medium: "text-sm md:text-sm placeholder:text-sm",
  small: "text-xs md:text-xs placeholder:text-xs",
};

const Textarea = forwardRef<HTMLTextAreaElement, ITextareaProps>(
  (
    {
      error,
      label,
      maxLength,
      helperText,
      className,
      size = "medium",
      variant = "standard",
      characterCount = 0,
      minCharacterCount = 0,
      disabled = false,
      showCounter = false,
      isRequired = false,
      isOptional = false,
      ...props
    },
    ref
  ) => {
    return (
      <div className="flex flex-col w-full gap-1">
        {label && (
          <Label
            className={cn(
              "font-light gap-1",
              fontsizes[size],
              error ? "text-error" : "text-typography-100"
            )}
          >
            {label}
            {isRequired && <span className="text-error">*</span>}
            {!isRequired && isOptional && (
              <span className="italic">(optional)</span>
            )}
          </Label>
        )}

        <div>
          <SCNTextarea
            ref={ref}
            disabled={disabled}
            maxLength={maxLength}
            rows={1}
            className={cn(
              "bg-transparent focus-visible:ring-[0px] disabled:text-typography-disabled placeholder:text-secondary-100 placeholder:font-light",
              variant === "outlined"
                ? "border-secondary-100 focus-visible:border-2 focus-visible:border-primary disabled:border-typography-disabled disabled:opacity-100"
                : "border-0 shadow-none",

              error && "border border-error",
              fontsizes[size],
              className
            )}
            {...props}
          />

          {/* IDIOT PROOFING */}
          {!helperText && minCharacterCount > 0 && maxLength && (
            <div className="flex flex-row items-center justify-between mt-1">
              <p className="text-xs text-typography-100">
                Please enter between {minCharacterCount}-{maxLength} characters
                length
              </p>
              <p className="text-xs text-typography-100">
                {characterCount}/{maxLength}
              </p>
            </div>
          )}

          {!showCounter && helperText && (
            <p className="mt-1 text-xs text-typography-100">{helperText}</p>
          )}

          {error && <p className="mt-1 text-xs text-error">{error}</p>}
        </div>
      </div>
    );
  }
);

Textarea.displayName = "Textarea";
export default Textarea;
