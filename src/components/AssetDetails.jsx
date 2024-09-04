import { useLocation, useParams } from "react-router-dom";
import Keyword from "./Keyword";

const AssetDetails = () => {
  const { id } = useParams();
  const location = useLocation();
  const { asset, item } = location.state || {}; // Fallback in case no state is passed

  const { title, media_type, keywords, center, description, date_created } =
    item.data[0];

  let extension;

  if (media_type === "image") {
    extension = ".jpg";
  } else if (media_type === "video") {
    extension = ".mp4";
  } else {
    extension = ".mp3";
  }

  const test = asset.collection.items.filter((link) =>
    link.href.includes(extension)
  );

  let sourceURL = test[0].href;

  return (
    <div className="  container mx-auto p-4">
      {asset ? (
        <div className="flex flex-col">
          <div className="w-full md:w-1/2">
            {media_type === "image" && (
              <img
                src={sourceURL}
                alt={title}
                className="object-cover w-full h-64 md:h-auto rounded-lg shadow-lg"
              />
            )}
            {media_type === "video" && <video src={sourceURL} controls />}
            {media_type === "audio" && <audio src={sourceURL} controls />}
          </div>
          <div className="w-full md:w-1/2 mt-4 md:mt-0 md:pl-6">
            <h1 className="text-blue-600 text-3xl font-bold">{title}</h1>
            <div className="mt-4 flex flex-wrap gap-2">
              {keywords.length > 0 &&
                keywords.map((keyword, i) => (
                  <Keyword key={i} keyword={keyword} />
                ))}
            </div>
            {center && (
              <p className="text-gray-500 text-sm mt-2">Center: {center}</p>
            )}
            {date_created && (
              <p className="text-gray-500 text-sm mt-2">
                Date Created: {new Date(date_created).toLocaleDateString()}
              </p>
            )}
            <br />
            {description && (
              <p className="mt-6 text-gray-700 text-base leading-relaxed">
                {description}
              </p>
            )}
            <br />
          </div>
        </div>
      ) : (
        <p>404: No data available.</p>
      )}
    </div>
  );
};

export default AssetDetails;
