"use client";
import { useEffect } from "react";
type ModalProps = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  children: React.ReactNode;
};

const ModalWindow = ({ children, isOpen, setIsOpen }: ModalProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);
  if (!isOpen) {
    return null;
  }
  return (
    <div
      className="fixed w-full bg-gray-800 bg-opacity-50 inset-0 flex items-end sm:items-center justify-center z-100"
      onClick={() => setIsOpen(false)}
    >
      <div
        className="w-full h-[90%] max-w-[40rem] bg-white rounded-md  "
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

export default ModalWindow;
