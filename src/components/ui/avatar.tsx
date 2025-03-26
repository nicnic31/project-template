import {
  AvatarFallback,
  AvatarImage,
  Avatar as SCNAvatar,
} from "@/shadcn/components/ui/avatar";
import { cn } from "@/shadcn/lib/utils";

type Color = "primary" | "secondary" | "info" | "success" | "error" | "warning";

interface AvatarProps {
  src: string;
  fallback: string;
  color?: Color;
  size?: number;
}

const fallbackBg: Record<Color, string> = {
  primary: "bg-primary-100",
  secondary: "bg-primary-100",
  info: "bg-info-100",
  success: "bg-success-100",
  error: "bg-error-100",
  warning: "bg-warning-100",
};

function Avatar({ src, fallback, color = "info", size = 40 }: AvatarProps) {
  return (
    <SCNAvatar className="bg-cover" style={{ height: size, width: "size" }}>
      <AvatarImage src={src !== "" ? src : undefined} alt="avatar" />
      <AvatarFallback className={cn(fallbackBg[color])}>
        {fallback}
      </AvatarFallback>
    </SCNAvatar>
  );
}

export default Avatar;
