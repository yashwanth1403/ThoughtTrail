interface ButtonProps {
  onclick: () => void;
  text: string;
}

export function Button({ onclick, text }: ButtonProps) {
  return (
    <div className="mt-6 w-[85%] ml-8">
      <button
        onClick={onclick}
        className="px-2 py-2 md:px-3 md:py-2 bg-black w-full font-bold rounded-lg text-white mb-2"
      >
        {text}
      </button>
    </div>
  );
}
