"use client";

import { useEffect } from "react";
import { cn } from "@/shadcn/lib/utils";
import useToast from "@/store/useToast";

import { CircleCheck, CircleX, X } from "lucide-react";

function Toast() {
  const { open, status, description, close } = useToast();

  useEffect(() => {
    const hideSnackbar = setTimeout(() => {
      close();
    }, 3000);

    return () => clearTimeout(hideSnackbar);
  }, [open]);

  if (!open) {
    return null;
  }

  return (
    <div
      className={cn(
        "fixed right-[50%] translate-x-[50%] rounded bg-secondary-100 transition ease-in-out",
        open ? "top-5" : "top-[-100px]"
      )}
    >
      <div className="flex flex-row gap-2 items-center p-2">
        {status === "success" ? (
          <CircleCheck size={18} className="text-success" />
        ) : (
          <CircleX size={18} className="text-error" />
        )}
        <p className="text-sm tracking-wide text-white">{description}</p>

        <button
          onClick={() => close()}
          className="ml-2 p-1 rounded-full hover:bg-secondary-200/20"
        >
          <X size={14} />
        </button>
      </div>
    </div>
  );
}

export default Toast;
