import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Card = ({ item }) => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  async function handleClick(e) {
    e.preventDefault();
    setLoading(true);
    const res = await fetch(
      `https://images-api.nasa.gov/asset/${item.data[0].nasa_id}`,
    );
    const asset = await res.json();
    navigate(`/asset/${item.data[0].nasa_id}`, {
      state: { asset: asset, item: item, loading: loading },
    });
  }
  return (
    <div className="" onClick={handleClick}>
      <div
        className="p-[2px] rounded-2xl bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500
      hover:shadow-2xl hover:scale-105 transform transition-all duration-300
"
      >
        <div className="flex flex-col items-center justify-center h-80 p-6 rounded-2xl bg-gray-900 text-white">
          <div
            className="flex flex-col w-full items-center justify-center h-80 p-6 md:py-6 bg-gradient-to-bl from-slate-800 to-gray-700
  border border-white/10 rounded-2xl shadow-xl   text-white backdrop-blur-sm bg-opacity-80 cursor-pointer"
          >
            {item.data[0].media_type === "image" && (
              <>
                <img
                  className="rounded-t-lg h-3/4 w-full object-cover"
                  src={item.links[0].href}
                  alt={item.data[0].title}
                />
                <div className="p-5">
                  <h5 className="mb-1 md:text-lg text-medium font-bold tracking-tight text-gray-900 dark:text-white">
                    {item.data[0].title}
                  </h5>
                </div>
              </>
            )}
            {item.data[0].media_type === "video" && (
              <>
                <img
                  className="rounded-t-lg h-2/3 w-full opacity-100 lg:opacity-55 lg:hover:opacity-100 lg:transition-opacity lg:duration-200 object-cover"
                  src={item.links[0].href}
                  alt={item.data[0].title}
                />
                <div className="p-5">
                  <h5 className="mb-1 md:text-lg text-medium font-bold tracking-tight text-gray-900 dark:text-white">
                    {item.data[0].title}
                  </h5>
                </div>
              </>
            )}
            {item.data[0].media_type === "audio" && (
              <div className="p-5">
                <h5 className="mb-1 text-medium font-bold tracking-tight text-gray-900 dark:text-white">
                  <i className="fa-regular fa-file-audio"></i>{" "}
                  {item.data[0].title}
                </h5>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
