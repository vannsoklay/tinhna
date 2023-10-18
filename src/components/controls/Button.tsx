import { MouseEventHandler } from "react";

type InputType = {
  type: "button" | "submit" | "reset" | undefined;
  text: string;
  onClick: MouseEventHandler<HTMLButtonElement> | undefined;
};

const Button: React.FC<InputType> = ({ type, text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="text-gray-500 block text-sm appearance-none rounded-sm w-full bg-white border border-grey-light hover:border-grey px-2 py-2 outline-none"
      type={type}
    >
      {text}
    </button>
  );
};

export { Button };
