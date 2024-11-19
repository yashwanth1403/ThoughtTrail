interface LabeledInputProps {
  label: string;
  placeholder: string;
  onchange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
}

export function Input({
  label,
  placeholder,
  onchange,
  type = "text",
}: LabeledInputProps) {
  return (
    <div className="flex flex-col mt-4 w-[85%] gap-4 ml-8">
      <label className="text-left text-md md:text-lg ml-1 font-semibold">
        {label}
      </label>
      <input
        placeholder={placeholder}
        type={type}
        className="px-2 py-2.5 border-none rounded-md outline-none bg-slate-50"
        onChange={onchange}
      />
    </div>
  );
}
