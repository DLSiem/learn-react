import { useState } from "react";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className="relative inline-block text-left"
      onMouseLeave={handleMouseLeave}
    >
      <div
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        className="cursor-pointer"
      >
        <button
          type="button"
          className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
        >
          Menu
          {/* Import svg from public */}
          <svg
            className="-mr-1 ml-2 h-5 w-5"
            width="800px"
            height="800px"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="0" fill="none" width="24" height="24" />

            <g>
              <path d="M7 10l5 5 5-5" />
            </g>
          </svg>
        </button>
      </div>
      {isOpen && (
        <div
          className="origin-top-right absolute w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="py-1" role="none">
            <a
              href="/input-state"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
            >
              Input State
            </a>
            <a
              href="/sharing-state"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
            >
              Sharing State
            </a>
            <a
              href="/state-structure"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
            >
              State Structure
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
