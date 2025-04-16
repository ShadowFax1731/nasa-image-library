const Input = ({
  handleChange,
  handleFormSubmit,
  onFilterChange,
  filters,
  loading,
}) => {
  function handleCheckboxChange(e) {
    const { name, checked } = e.target;
    onFilterChange(name, checked);
  }

  return (
    <>
      <div className="flex flex-col justify-center gap-4 items-center ">
        <h1 className="text-blue-600 text-3xl text-center font-bold">
          NASA Images and Videos Library
        </h1>

        <div className="w-full max-w-sm min-w-[200px] relative mt-4">
          <label className="block mb-1 text-sm text-slate-800">Query:</label>
          <div className="relative">
            <form action="" onSubmit={handleFormSubmit}>
              <input
                className="w-full pr-20 h-10 pl-3 py-2 bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-400 shadow-sm focus:shadow-md"
                placeholder="Enter your text"
                onChange={(e) => handleChange(e)}
              />
              <button
                className="absolute h-8 text-white text-sm right-1 top-1 my-auto px-3 flex items-center bg-blue-500 rounded hover:bg-blue-800"
                type="submit"
                onClick={handleFormSubmit}
              >
                Search
              </button>
            </form>
          </div>
        </div>

        <div className="flex">
          <div className="flex items-center me-4">
            <input
              id="inline-checked-checkbox"
              name="image"
              type="checkbox"
              checked={filters.image}
              value="image"
              onChange={handleCheckboxChange}
            />
            <label
              htmlFor="inline-checked-checkbox"
              className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Images
            </label>
          </div>
          <div className="flex items-center me-4">
            <input
              id="inline-checkbox"
              name="video"
              type="checkbox"
              checked={filters.video}
              value="video"
              onChange={handleCheckboxChange}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="inline-checkbox"
              className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Videos
            </label>
          </div>
          <div className="flex items-center me-4">
            <input
              id="inline-2-checkbox"
              name="audio"
              type="checkbox"
              checked={filters.audio}
              value="audio"
              onChange={handleCheckboxChange}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="inline-2-checkbox"
              className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Audios
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default Input;
