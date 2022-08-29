import React, { useState } from "react";
import { useDetectClickOutside } from "react-detect-click-outside";
const AuthMenu = () => {
  const [isShow, setIsShow] = useState(false);

  const ref = useDetectClickOutside({ onTriggered: () => setIsShow(false) });
  return (
    <div className="text-white" ref={ref}>
      <div className="relative">
        <button
          className={`text-transparent bg-clip-text bg-gradient-to-r hover:from-purple-400 hover:to-pink-600 font-Inter border rounded-full px-5 py-2 font-bold tracking-widest  flex items-center cursor-pointer transition-all duration-300 ${
            isShow ? "from-purple-400 to-pink-600" : "from-white to-white"
          }`}
          type="button"
          onClick={() => setIsShow(!isShow)}
        >
          Sign In
          <p
            className={`hover:text-pink-600" ${
              isShow ? "text-pink-600" : "text-white"
            }`}
          >
            <svg
              class="ml-2 w-4 h-4"
              aria-hidden="true"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </p>
        </button>

        <div
          id="dropdown"
          class={`'z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 block ${
            isShow ? "block" : "hidden"
          }`}
          style={{
            position: "absolute",
            inset: "0px auto auto 0px",
            margin: 0,
            transform: "translate(-47px, 47px)",
          }}
        >
          <ul
            class="py-1 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdownDefault"
          >
            <li>
              <a
                href="/"
                class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                RPC point selection
              </a>
            </li>
            <li>
              <a
                href="/"
                class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Logout
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AuthMenu;
