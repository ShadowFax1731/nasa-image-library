import React from "react";

const Keyword = ({ keyword }) => {
  return (
    <span className="inline-flex items-center px-1 py-1 bg-blue-700 text-white text-xs font-sm rounded mr-2 mb-2">
      {keyword}
    </span>
  );
};

export default Keyword;
