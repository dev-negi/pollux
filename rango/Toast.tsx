import React, { useEffect } from "react";

export interface ToastProps {
  id: string;
  destroy: () => void;
  title: string;
  message: string;
  duartion?: number;
}

const Toast: React.FC<ToastProps[]> = ({ list, remove }) => {
  return (
    <div className="absolute">
      {list.map((toast) => {
        const { id, message } = toast;
        return (
          <div
            key={id}
            className="relative flex z-10 h-10 p-2 justify-between bg-indigo-500 mt-4"
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
            <div onClick={() => remove(id)}>close</div>
          </div>
        );
      })}
    </div>
  );
};

export default Toast;
