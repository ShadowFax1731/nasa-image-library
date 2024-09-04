import { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import AssetDetails from "./components/AssetDetails";

function App() {
  const [data, setData] = useState([]);

  const [query, setQuery] = useState("Nebula");

  const [filters, setFilters] = useState({
    image: true,
    audio: false,
    video: false,
  });

  const [loading, setLoading] = useState(false);

  //Function and effect to handle the API Call for the default page load.

  // async function handleNextReload() {
  //   const res = await axios.get(next);
  //   setData(prev => [...prev, ...res.data.collection.items])
  //   setPage(prev => prev + 1)
  // }\

  async function handleAPIRequest() {
    setLoading(true);
    const activeFilters = Object.keys(filters).filter((key) => filters[key]);

    const filterParams =
      activeFilters.length > 0 ? activeFilters.join(",") : "image";

    const res = await axios.get(
      `https://images-api.nasa.gov/search?q=${query}&media_type=${filterParams}`
    );
    let response = res.data.collection.items;
    setData(response);

    setLoading(false);
  }

  useEffect(() => {
    handleAPIRequest();
  }, [filters]);

  function handleFilterChange(name, isChecked) {
    setLoading(true);
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: isChecked,
    }));
    setLoading(false);
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    setLoading(true);
    handleAPIRequest();
  }

  function handleChange(e) {
    const val = e.target.value;
    setQuery(val);
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              handleChange={handleChange}
              handleFormSubmit={handleFormSubmit}
              onFilterChange={handleFilterChange}
              data={data}
              loading={loading}
              query={query}
              filters={filters}
            />
          }
        />
        <Route path="/asset/:id" element={<AssetDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
