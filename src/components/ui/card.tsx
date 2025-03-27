import { ReactNode } from "react";
import { CardContent, Card as SCNCard } from "@/shadcn/components/ui/card";

interface CardProps {
  children: ReactNode;
  title?: string;
}

function Card({ children, title }: CardProps) {
  return (
    <SCNCard className="bg-secondary border border-secondary-100 p-0">
      <CardContent className="p-4">
        {title && (
          <h3 className="text-sm text-typography tracking-wide mb-2">{title}</h3>
        )}

        {children}
      </CardContent>
    </SCNCard>
  );
}

export default Card;
