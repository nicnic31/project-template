import { Label } from "@/shadcn/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/shadcn/components/ui/popover";
import {
  Select as SCNSelect,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shadcn/components/ui/select";
import { cn } from "@/shadcn/lib/utils";
import { Check, ChevronDown } from "lucide-react";
import { useState } from "react";

type Variant = "filled" | "outlined";

type Size = "medium" | "small";

type Mode = "multiple" | "single";

export type TMenuItem = {
  id: string;
  label: string;
  value: string;
};

interface ISelectProps {
  value: string;
  menu: TMenuItem[];
  placeholder: string;
  onValueChange: (item: string) => void;
  mode?: Mode;
  variant?: Variant;
  size?: Size;
  label?: string;
  error?: string;
  contentWidth?: string;
  disabled?: boolean;
  isRequired?: boolean;
  isOptional?: boolean;
}

type SelectModeProps = Omit<
  ISelectProps,
  "isRequired" | "isOptional" | "label" | "mode"
>;

const fontSizes: Record<Size, string> = {
  medium: "text-base",
  small: "text-sm",
};

const displaySelectedItems = (
  totalSelectedItems: number,
  placeholder: string
) => {
  if (totalSelectedItems > 0) {
    if (totalSelectedItems > 1) {
      return `${totalSelectedItems} items selected`;
    }

    return `${totalSelectedItems} item selected`;
  }

  return placeholder;
};

function MultipleSelect({
  menu,
  value,
  error,
  placeholder,
  contentWidth,
  onValueChange,
  variant = "filled",
  size = "small",
  disabled = false,
}: SelectModeProps) {
  const [open, setOpen] = useState<boolean>(false);

  const arrayValues = value.split(",").filter((val) => val !== "");

  const handleItem = (item: string) => {
    onValueChange(item);
    setOpen(false);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger
        disabled={disabled}
        className={cn(
          "w-full h-9 rounded-md px-3 flex flex-row items-center justify-between focus:border-0 focus:ring-2 focus:ring-primary",
          variant === "outlined"
            ? "bg-transparent border border-secondary-100"
            : "bg-outlined-secondary",
          arrayValues.length === 0 && !disabled && "text-secondary-100",
          arrayValues.length > 0 && !disabled && "text-typography",
          variant === 'filled' && disabled && "bg-secondary-100/30 opacity-40 cursor-not-allowed",
          variant === "outlined" && "border-typography-disabled opacity-30 cursor-not-allowed",
          disabled && "text-typography-disabled",
          error && "border-0 ring-2 ring-error",
          fontSizes[size]
        )}
      >
        {displaySelectedItems(arrayValues.length, placeholder)}

        <ChevronDown
          size={15}
          color="#73777b"
          className={cn(open ? "rotate-180" : "rotate-0")}
        />
      </PopoverTrigger>
      <PopoverContent
        className={cn(
          "bg-secondary-200 border-0 flex flex-col p-1",
          contentWidth
        )}
      >
        {menu.map((item) => {
          const isItemSelected = arrayValues.includes(item.value);
          return (
            <button
              key={item.id}
              onClick={() => handleItem(item.value)}
              className={cn(
                "p-2 text-typography flex flex-row gap-3 items-center justify-between rounded-md hover:bg-typography hover:text-secondary",
                fontSizes[size]
              )}
            >
              {item.label}
              {isItemSelected && <Check size={14} />}
            </button>
          );
        })}
      </PopoverContent>
    </Popover>
  );
}

function SingleSelect({
  menu,
  value,
  error,
  placeholder,
  onValueChange,
  variant = "filled",
  size = "small",
  disabled = false,
}: SelectModeProps) {
  return (
    <SCNSelect value={value} disabled={disabled} onValueChange={onValueChange}>
      <SelectTrigger
        className={cn(
          "w-full text-white data-[placeholder]:text-typography-100 data-[disabled]:text-typography-disabled focus-visible:border-0 focus-visible:ring-2 focus-visible:ring-primary",
          variant === "outlined"
            ? "bg-transparent border-secondary-100"
            : "bg-outlined-secondary border-0 data-[disabled]:bg-secondary-100/30",
          error && "border-0 shadow-none ring-2 ring-error",
          fontSizes[size]
        )}
      >
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent className="bg-secondary-200 border-0 text-typography">
        {menu.map((item) => (
          <SelectItem
            key={item.id}
            value={item.value}
            className={fontSizes[size]}
          >
            {item.label}
          </SelectItem>
        ))}
      </SelectContent>
    </SCNSelect>
  );
}

function Select({
  menu,
  label,
  error,
  value,
  placeholder,
  onValueChange,
  mode = "single",
  variant = "outlined",
  size = "small",
  contentWidth = "w-[300px]",
  disabled = false,
  isRequired = false,
  isOptional = false,
}: ISelectProps) {
  return (
    <div className="flex flex-col w-full gap-2">
      {label && (
        <Label
          className={cn(
            "font-light gap-1",
            error ? "text-error" : "text-typography-100",
            fontSizes[size]
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
        {mode === "single" ? (
          <SingleSelect
            size={size}
            menu={menu}
            value={value}
            variant={variant}
            error={error}
            disabled={disabled}
            placeholder={placeholder}
            contentWidth={contentWidth}
            onValueChange={onValueChange}
          />
        ) : (
          <MultipleSelect
            size={size}
            menu={menu}
            value={value}
            variant={variant}
            error={error}
            disabled={disabled}
            placeholder={placeholder}
            contentWidth={contentWidth}
            onValueChange={onValueChange}
          />
        )}
        {error && <p className="mt-1 text-xs text-error">{error}</p>}
      </div>
    </div>
  );
}

export default Select;
