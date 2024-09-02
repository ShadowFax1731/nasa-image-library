const Card = ({ item }) => {
  return (
    <div className="">
      <div
        className="flex flex-col items-center justify-center h-80 p-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:scale-105 duration-200 md:py-4 py-6 cursor-pointer"
        onClick={(e) => e.preventDefault()}
      >
        <img
          className="rounded-t-lg h-2/3 w-full opacity-100 lg:opacity-55 lg:hover:opacity-100 lg:transition-opacity lg:duration-200 object-cover"
          src={item.links[0].href}
          alt={item.data[0].title}
        />

        <div className="p-5">
          <h5 className="mb-2 md:text-lg text-medium font-bold tracking-tight text-gray-900 dark:text-white">
            {item.data[0].title}
          </h5>
        </div>
      </div>
    </div>
  );
};

export default Card;
