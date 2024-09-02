import React from "react";

const Keyword = ({ keyword }) => {
  return (
    <span className="inline-flex items-center px-3 py-1 bg-blue-300 text-white text-sm font-medium rounded mr-2 mb-2">
      {keyword}
    </span>
  );
};

export default Keyword;
