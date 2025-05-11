import React from "react";
import Subcribe from "../../components/MultiComponent/Web/Subcribe";

const SignUp = () => {
  return (
    <div>
      <div className="space-y-5" data-hs-toggle-password-group="">
        <div className="max-w-sm">
          <label
            htmlFor="hs-toggle-password-multi-toggle-np"
            className="block text-sm mb-2"
          >
            New password
          </label>
          <div className="relative">
            <input
              id="hs-toggle-password-multi-toggle-np"
              type="password"
              className="py-2.5 sm:py-3 ps-4 pe-10 block w-full border-gray-200 rounded-lg sm:text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
              placeholder="Enter new password"
            />
            <button
              type="button"
              data-hs-toggle-password='{
          "target": ["#hs-toggle-password-multi-toggle", "#hs-toggle-password-multi-toggle-np"]
        }'
              className="absolute inset-y-0 end-0 flex items-center z-20 px-3 cursor-pointer text-gray-400 rounded-e-md focus:outline-hidden focus:text-blue-600"
            >
              <svg
                className="shrink-0 size-3.5"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path
                  className="hs-password-active:hidden"
                  d="M9.88 9.88a3 3 0 1 0 4.24 4.24"
                ></path>
                <path
                  className="hs-password-active:hidden"
                  d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"
                ></path>
                <path
                  className="hs-password-active:hidden"
                  d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"
                ></path>
                <line
                  className="hs-password-active:hidden"
                  x1="2"
                  x2="22"
                  y1="2"
                  y2="22"
                ></line>
                <path
                  className="hidden hs-password-active:block"
                  d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"
                ></path>
                <circle
                  className="hidden hs-password-active:block"
                  cx="12"
                  cy="12"
                  r="3"
                ></circle>
              </svg>
            </button>
          </div>
        </div>
        <div className="max-w-sm mb-5">
          <label
            htmlFor="hs-toggle-password-multi-toggle"
            className="block text-sm mb-2"
          >
            Current password
          </label>
          <div className="relative">
            <input
              id="hs-toggle-password-multi-toggle"
              type="password"
              className="py-2.5 sm:py-3 ps-4 pe-10 block w-full border-gray-200 rounded-lg sm:text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
              placeholder="Enter current password"
              value="12345qwerty"
            />
            <button
              type="button"
              data-hs-toggle-password='{
          "target": ["#hs-toggle-password-multi-toggle", "#hs-toggle-password-multi-toggle-np"]
        }'
              className="absolute inset-y-0 end-0 flex items-center z-20 px-3 cursor-pointer text-gray-400 rounded-e-md focus:outline-hidden focus:text-blue-600"
            >
              <svg
                className="shrink-0 size-3.5"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path
                  className="hs-password-active:hidden"
                  d="M9.88 9.88a3 3 0 1 0 4.24 4.24"
                ></path>
                <path
                  className="hs-password-active:hidden"
                  d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"
                ></path>
                <path
                  className="hs-password-active:hidden"
                  d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"
                ></path>
                <line
                  className="hs-password-active:hidden"
                  x1="2"
                  x2="22"
                  y1="2"
                  y2="22"
                ></line>
                <path
                  className="hidden hs-password-active:block"
                  d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"
                ></path>
                <circle
                  className="hidden hs-password-active:block"
                  cx="12"
                  cy="12"
                  r="3"
                ></circle>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
