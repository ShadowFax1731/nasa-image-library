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
    <div className="cursor-pointer" onClick={handleClick}>
      {/* Gradient Border */}
      <div className="p-[2px] rounded-2xl bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
        {/* Inner Card */}
        <div className="flex flex-col rounded-2xl bg-gradient-to-bl from-slate-800 to-gray-700 text-white shadow-xl overflow-hidden backdrop-blur-sm bg-opacity-80">
          {/* Media */}
          {(item.data[0].media_type === "image" ||
            item.data[0].media_type === "video") && (
            <div className="w-full aspect-[4/3] bg-black flex items-center justify-center">
              <img
                className="w-full h-full object-contain"
                src={item.links[0].href}
                alt={item.data[0].title}
              />
            </div>
          )}

          {/* Title */}
          <div className="p-4 text-center">
            <h5 className="text-sm md:text-base font-semibold tracking-tight text-white">
              {item.data[0].media_type === "audio" && (
                <i className="fa-regular fa-file-audio mr-2" />
              )}
              {item.data[0].title}
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
