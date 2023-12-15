type RadioInputProps = {
  name: string;
  label: string;
  isChecked: boolean;
  onChange: () => void;
};

export function RadioInput({
  name,
  label,
  isChecked,
  onChange,
}: RadioInputProps) {
  return (
    <div
      className={`${
        isChecked
          ? "border-berlin-medium-blue bg-berlin-medium-blue bg-opacity-10"
          : "bg-opacity-5"
      } bg-berlin-black-40 hover:border-berlin-medium-blue group flex cursor-pointer items-center gap-3 border-2 px-3 py-2`}
      onClick={onChange}
    >
      <input
        type="radio"
        name={name}
        onChange={onChange}
        checked={isChecked}
        className="checked:bg-berlin-medium-blue checked:outline-berlin-medium-blue focus:ring-berlin-medium-blue h-3 w-3 appearance-none rounded-full bg-white outline outline-2 outline-offset-4 outline-black focus:ring focus:ring-offset-8"
      />
      <label className="cursor-pointer" onClick={onChange}>
        {label}
      </label>
    </div>
  );
}
