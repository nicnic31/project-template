import { forwardRef } from "react";
import cn from "classnames";
import { TextSizeName, textSizes } from "@/utils/textSizes";

export interface ITextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  field: string;
  textSize?: TextSizeName;
  helperText?: string;
}

const TextArea = forwardRef<HTMLTextAreaElement, ITextAreaProps>(
  (
    {
      label,
      field,
      textSize = "large",
      helperText,
      placeholder,
      value,
      rows,
      className,
      onChange,
      ...textAreaProps
    },
    ref
  ) => {
    return (
      <div className="flex flex-col m-4">
        {label && (
          <label htmlFor={field} className="mb-2 text-base">
            {label}
          </label>
        )}
        <div>
          <textarea
            id={field}
            name={field}
            rows={rows}
            placeholder={placeholder}
            onChange={onChange}
            ref={ref}
            className={cn(
              "p-3 w-full rounded outline-0 focus:border-2",
              helperText
                ? "border-2 border-dark-red"
                : "border border-gray focus:border-dark-gray",
              textSizes(textSize),
              className
            )}
            {...textAreaProps}
          >
            {value}
          </textarea>
          {helperText && (
            <p className="text-xs text-red font-medium tracking-wide">
              {helperText}
            </p>
          )}
        </div>
      </div>
    );
  }
);

TextArea.displayName = "TextArea";
export default TextArea;
