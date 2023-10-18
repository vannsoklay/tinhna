type InputType = {
  placeholder: string;
  type: string;
  name: string;
};

const InputField: React.FC<InputType> = ({ placeholder, type, name }) => {
  return (
    <div>
      <input
        name={name}
        autoComplete="off"
        placeholder={placeholder}
        className="text-gray-500 block text-sm appearance-none rounded-sm w-full bg-white border border-grey-light hover:border-grey px-2 py-2 outline-none"
        type={type}
      />
    </div>
  );
};

export { InputField };
