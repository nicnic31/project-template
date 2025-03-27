import { create } from "zustand";

type Status = "success" | "error";
type ToastActions = { status: Status; description: string };

interface IToast {
  open: boolean;
  status: Status;
  description: string;
  toast: (action: ToastActions) => void;
  close: () => void;
}

const useToast = create<IToast>((set) => ({
  open: false,
  status: "success",
  description: "",
  toast: (action: ToastActions) =>
    set((prev) => ({
      ...prev,
      open: true,
      status: action.status,
      description: action.description,
    })),
  close: () =>
    set((prev) => ({
      ...prev,
      open: false,
      status: "success",
      description: "",
    })),
}));

export default useToast;
