import React from "react";

type ModalType = {
  children: React.ReactNode;
  title: string,
  onCancel: Function;
  hide: Boolean;
};

const Modal: React.FC<ModalType> = ({ children, title, onCancel, hide }) => {
  return (
    <div
      id="popup-modal"
      className={`${
        !hide && "hidden"
      } overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 md:inset-0 h-full md:h-full bg-gray-800 bg-opacity-50 flex justify-center pt-36`}
    >
      <div className="relative p-4 w-full lg:max-w-2xl sm:max-w-md h-full md:h-auto">
        <div className="relative bg-white rounded-xl shadow dark:bg-gray-700">
          <button
            onClick={() => onCancel()}
            type="button"
            className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
            data-modal-toggle="popup-modal"
          >
            <svg
              aria-hidden="true"
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
            <span className="sr-only"></span>
          </button>
          <div className="px-6 py-4">
            <div className="mb-4">
              <label className="font-bold text-slate-800 text-lg">{title}</label>
            </div>
            <div>{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
