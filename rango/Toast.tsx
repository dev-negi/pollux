import React, { useEffect } from "react";
import checkIcon from "./assets/check.svg";

export interface ToastProps {
  id: string;
  destroy: () => void;
  title: string;
  message: string;
  duartion?: number;
}

const Toast: React.FC<ToastProps[]> = ({ list }) => {
  return (
    <>
      {list.map((toast) => {
        const { id, message } = toast;
        return (
          <div
            id="alert"
            key={id}
            className="fixed flex z-10 h-10 p-2 justify-between align-middle rounded-md border top-8 right-8 transition-all delay-150 easy-in-out bg-indigo-500"
          >
            <div className="flex p-4 items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <div className="flex">{message}</div>
            <div onClick="">close</div>
          </div>
        );
      })}
    </>
  );
};

export default Toast;
