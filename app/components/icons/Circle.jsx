import React from "react";

export default function Circle({fill}) {
  return (
    <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill={fill}
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-5 feather feather-circle">
            <circle cx="12" cy="12" r="10"></circle>
        </svg>
  );
}
