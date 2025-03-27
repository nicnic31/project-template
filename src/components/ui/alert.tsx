import { cn } from "@/shadcn/lib/utils";
import { ReactNode, useEffect, useState } from "react";
import { AlertTriangle, CheckCircle, Info, X, XCircle } from "lucide-react";

type Status = "success" | "error" | "info" | "warning";

interface AlertProps {
  title: string;
  description: string;
  status?: Status;
  withIcon?: boolean;
  isFixed?: boolean;
}

const statusStyles: Record<Status, string> = {
  success: "bg-outlined-success border border-success-200 text-success-200",
  error: "bg-error-100/80 border border-error-200 text-error-200",
  info: "bg-info-100/80 border border-info-200 text-info-200",
  warning: "bg-warning-100/90 border border-warning-200 text-warning-200",
};

const statusIcons: Record<Status, ReactNode> = {
  success: <CheckCircle size={20} />,
  error: <XCircle size={20} />,
  info: <Info size={20} />,
  warning: <AlertTriangle size={20} />,
};

function Alert({
  title,
  description,
  status = "info",
  withIcon = false,
  isFixed = false,
}: AlertProps) {
  const [show, setShow] = useState(true);

  useEffect(() => {
    if (!isFixed) {
      const hideAlert = setTimeout(() => {
        setShow(false);
      }, 3000);

      return () => clearTimeout(hideAlert);
    }
  }, []);

  if (!show) {
    return null;
  }

  return (
    <div
      className={cn(
        "flex flex-row items-center gap-3 rounded-md h-fit min-w-[300px] py-3 px-3",
        statusStyles[status]
      )}
    >
      {withIcon && statusIcons[status]}
      <div className="w-full">
        <div className="flex flex-row items-center justify-between">
          <h3 className="text-sm font-semibold tracking-wide">{title}</h3>
          {!isFixed && (
            <button
              onClick={() => setShow(false)}
              className="cursor-pointer p-1 rounded-full text-secondary-200 hover:bg-secondary-200 hover:text-typography"
            >
              <X size={12} />
            </button>
          )}
        </div>

        <p className="text-xs tracking-wide font-light">{description}</p>
      </div>
    </div>
  );
}

export default Alert;
