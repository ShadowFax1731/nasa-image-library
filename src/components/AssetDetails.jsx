import { useLocation, useParams } from "react-router-dom";
import Keyword from "./Keyword";
import DOMPurify from "dompurify";

const AssetDetails = () => {
  const { id } = useParams();
  const location = useLocation();
  const { asset, item, loading } = location.state || {}; // Fallback in case no state is passed

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
    link.href.includes(extension),
  );

  let sourceURL = test[0].href;

  return (
    <div className="w-full mx-auto px-6 py-10 bg-gradient-to-r from-blue-800 to-red-700 min-h-screen">
      {asset ? (
        <div className="flex flex-col md:flex-row items-start gap-8 bg-black/30 p-6 rounded-2xl shadow-2xl backdrop-blur-md border border-white/10">
          {/* Media Section */}
          <div className="w-full md:w-1/2 flex justify-center">
            {media_type === "image" && (
              <img
                src={sourceURL}
                alt={title}
                className="rounded-xl max-h-[450px] w-full object-contain shadow-md"
              />
            )}
            {media_type === "video" && (
              <video
                src={sourceURL}
                controls
                className="rounded-xl max-h-[450px] w-full object-contain shadow-md"
              />
            )}
            {media_type === "audio" && (
              <audio src={sourceURL} controls className="w-full" />
            )}
          </div>

          {/* Info Section */}
          <div className="w-full md:w-1/2 text-white">
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-yellow-300 via-pink-400 to-purple-400 bg-clip-text text-transparent animate-gradient-text">
              {title}
            </h1>

            {/* Keywords */}
            {keywords.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-2">
                {keywords.map((keyword, i) => (
                  <Keyword key={i} keyword={keyword} />
                ))}
              </div>
            )}

            {/* Metadata */}
            {center && (
              <p className="text-sm text-gray-200 mt-4">
                <span className="font-semibold text-white">Center:</span>{" "}
                {center}
              </p>
            )}
            {date_created && (
              <p className="text-sm text-gray-200 mt-1">
                <span className="font-semibold text-white">Date Created:</span>{" "}
                {new Date(date_created).toLocaleDateString()}
              </p>
            )}

            {/* Description */}
            {description && (
              <div
                className="mt-6 prose prose-invert max-w-none text-white text-sm leading-relaxed"
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(description),
                }}
              />
            )}
          </div>
        </div>
      ) : (
        <p className="text-white text-center text-xl font-semibold">
          404: No data available.
        </p>
      )}
    </div>
  );
};

export default AssetDetails;
