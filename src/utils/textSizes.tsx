export type TextSizeName = "small" | "medium" | "large";

export const textSizes = (size: TextSizeName) => {
  if (size === "small") {
    return "text-sm";
  } else if (size === "medium") {
    return "text-base";
  } else {
    return "text-lg";
  }
};
