import React from "react";
import { useLocation, useParams } from "react-router-dom";

const AssetDetails = () => {
  const { id } = useParams();
  const location = useLocation();
  const { asset, item } = location.state || {}; // Fallback in case no state is passed

  return (
    <div className="details">
      <h2>Details for Card ID: {id}</h2>
      {asset ? (
        <>
          <pre>{JSON.stringify(asset, null, 2)}</pre>
          <pre>{JSON.stringify(item, null, 2)}</pre>
        </>
      ) : (
        <p>No data available. You may have accessed this page directly.</p>
      )}
    </div>
  );
};

export default AssetDetails;
