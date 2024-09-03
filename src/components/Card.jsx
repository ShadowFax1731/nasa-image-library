import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Card = ({ item }) => {
  const navigate = useNavigate();

  return (
    <div
      className=""
      onClick={async (e) => {
        e.preventDefault();
        console.log(item.data[0].nasa_id);
        const res = await fetch(
          `https://images-api.nasa.gov/asset/${item.data[0].nasa_id}`
        );
        const asset = await res.json();
        console.log(asset);
        navigate(`/asset/${item.data[0].nasa_id}`, {
          state: { asset: asset, item: item },
        });
      }}
    >
      <div className="flex flex-col items-center justify-center h-80 p-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:scale-105 duration-200 md:py-4 py-6 cursor-pointer">
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
        {/* 
        <div className="flex flex-wrap gap-2 mb-4">
          {item.data[0].keywords.length > 0 &&
            item.data[0].keywords.map((keyword, i) => (
              <Keyword keyword={keyword} key={i} />
            ))}
        </div> */}
      </div>
    </div>
  );
};

export default Card;
