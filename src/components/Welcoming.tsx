export function Welcoming() {
  return (
    <div>
      <div className="md:h-screen md:w-2/3 bg-[#fff4e6] p-5 flex items-center">
        <div className="absolute top-3 md:top-10  left-6 md:left[50%] text-xl md:text-4xl font-bold font-serif text-[#912BBC]">
          ThoughtTrail
        </div>
        <div className="flex flex-col items-center justify-center gap-6">
          <div className=" text-lg md:text-3xl font-bold py-4 md:py-0">
            Join the communtiy
          </div>
          <div className=" text-md md:text-xl text-center">
            Create an account to start writing, sharing your thoughts, and
            engaging with the community.
          </div>
        </div>
      </div>
    </div>
  );
}
