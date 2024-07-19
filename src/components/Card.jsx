const Card = ({ data }) => {
  return (
    <div className="grid grid-cols-1 gap-8 gap-y-8 justify-evenly md:grid-cols-3 sm:grid-cols-2 grid-auto-rows-1fr px-4">
      {data.map((item, i) => {
        return (
          // <div key={i} className="m-4">
          //   <img
          //     src={item.links[0].href}
          //     alt={item.data[0].title}
          //     className="opacity-30 hover:opacity-100 transition-opacity duration-200"
          //   />
          //   <p>{item.data[0].title}</p>
          // </div>

          <div
            className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:scale-105 duration-200 md:py-4 py-6"
            key={i}
          >
            <a href="#">
              <img
                className="rounded-t-lg h-2/3 w-full opacity-55 hover:opacity-100 transition-opacity duration-200 object-cover"
                src={item.links[0].href}
                alt={item.data[0].title}
              />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 md:text-lg text-medium font-bold tracking-tight text-gray-900 dark:text-white">
                  {item.data[0].title}
                </h5>
              </a>
              {/* <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {item.data[0].description}
              </p> */}
              <a
                href="#"
                className="inline-flex items-center px-3 py-2 w-full text-sm font-medium text-center text-white bg-blue-500 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Read more
                <svg
                  className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
