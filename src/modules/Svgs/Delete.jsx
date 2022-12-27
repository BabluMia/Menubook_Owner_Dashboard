import React from 'react';

const Delete = () => {
    return (
        <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      fill="#000000"
                      viewBox="0 0 256 256"
                    >
                      <rect width="256" height="256" fill="none"></rect>
                      <circle
                        cx="128"
                        cy="128"
                        r="96"
                        fill="none"
                        stroke="#000000"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="24"
                      ></circle>
                      <line
                        x1="160"
                        y1="96"
                        x2="96"
                        y2="160"
                        fill="none"
                        stroke="#000000"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="24"
                      ></line>
                      <line
                        x1="160"
                        y1="160"
                        x2="96"
                        y2="96"
                        fill="none"
                        stroke="#000000"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="24"
                      ></line>
                    </svg>
    );
};

export default Delete;