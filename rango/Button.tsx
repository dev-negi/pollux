import React from 'react'

interface Props {
  tilte: string
  color: string
  height?: string
  hoverColor?: string
  onClick?: () => void
  width?: string
  loading?: string
  padding?: string
  noIcon?: boolean
}

function Button({
  title,
  color,
  height,
  hoverColor,
  onClick,
  width,
  loading,
  padding,
  noIcon,
}: Props) {
  return (
    <button
      className={`${height} px-6 py-2 font-semibold rounded-xl ${color} hover:${hoverColor} text-white ${
        width ? width : 'w-auto'
      } ${
        padding ? padding : ''
      } transition-all duration-300 focus:outline-none`}
      onClick={onClick}
    >
      <span className="absolute bottom-0 right-0 -mb-8 -mr-5 h-20 w-8 translate-x-1 rotate-45 transform bg-white opacity-10 transition-all duration-300 ease-out group-hover:translate-x-0"></span>
      <span className="absolute top-0 left-0 -mt-1 -ml-12 h-8 w-20 -translate-x-1 -rotate-45 transform bg-white opacity-10 transition-all duration-300 ease-out group-hover:translate-x-0"></span>
      <span className="relative z-20 flex items-center font-semibold">
        {noIcon && (
          <svg
            className="relative mr-2 h-5 w-5 flex-shrink-0 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 10V3L4 14h7v7l9-11h-7z"
            ></path>
          </svg>
        )}
        {loading ? 'Loading...' : title}
      </span>
    </button>
  )
}

export default Button
