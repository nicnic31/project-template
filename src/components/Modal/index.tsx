import { X } from "lucide-react";
import { ReactNode } from "react";

interface IModalProps {
  open: boolean;
  children: ReactNode;
  onClose: () => void;
  header?: {
    title: string;
    description: string;
  };
}

function Modal({ open, children, onClose, header }: IModalProps) {
  if (!open) {
    return null;
  }
  return (
    <div className="absolute w-screen h-screen overflow-hidden">
      <div className="absolute z-0 w-full h-full bg-black opacity-80" />

      <div className="absolute z-2 top-[50%] left-[50%] translate-[-50%] min-w-[40vw] max-w-[60vw] max-h-[80vh] rounded-md pt-4 pb-5 px-5 transition delay-200 duration-300 ease-in-out bg-secondary-200 border border-secondary-100 ">
        <div className="flex flex-row gap-2 items-start justify-end mb-2">
          {header && (
            <div className="w-full">
              <h3 className="font-semibold text-typography text-sm tracking-wide">
                {header.title}
              </h3>
              <p className="font-light text-xs text-typography-100 tracking-wide">
                {header.description}
              </p>
            </div>
          )}

          <button
            onClick={onClose}
            className="p-1 rounded-full cursor-pointer hover:bg-secondary"
          >
            <X size={14} />
          </button>
        </div>

        {children}
      </div>
    </div>
  );
}

export default Modal;
