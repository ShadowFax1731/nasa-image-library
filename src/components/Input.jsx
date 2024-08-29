const Input = ({ handleChange, handleFormSubmit }) => {
  return (
    <div className="flex flex-col justify-center gap-4 items-center ">
      <h1 className="text-blue-600 text-3xl text-center">
        NASA Images and Videos Library
      </h1>

      <div className="w-full max-w-sm min-w-[200px] relative mt-4">
        <label className="block mb-1 text-sm text-slate-800">Query:</label>
        <div className="relative">
          <input
            className="w-full pr-20 h-10 pl-3 py-2 bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-400 shadow-sm focus:shadow-md"
            placeholder="Enter your text"
          />
          <button
            className="absolute h-8 text-white text-sm right-1 top-1 my-auto px-3 flex items-center bg-blue-500 rounded hover:bg-blue-800"
            type="button"
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Input;
