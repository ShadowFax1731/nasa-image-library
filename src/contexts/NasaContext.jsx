import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const NasaContext = createContext();

export const useNasa = () => useContext(NasaContext);

export function NasaProvider({ children }) {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("Nebula");
  const [loading, setLoading] = useState(false);
  const [filters, setFilters] = useState({
    image: true,
    audio: false,
    video: false,
  });

  const handleAPIRequest = async () => {
    setLoading(true);
    const activeFilters = Object.keys(filters).filter((key) => filters[key]);
    const filterParams =
      activeFilters.length > 0 ? activeFilters.join(",") : "image";

    const res = await axios.get(
      `https://images-api.nasa.gov/search?q=${query}&media_type=${filterParams}`,
    );

    setData(res.data.collection.items);
    setLoading(false);
  };

  useEffect(() => {
    handleAPIRequest();
  }, [filters]);

  const handleFilterChange = (name, isChecked) => {
    if (!isChecked) return;
    setLoading(true);
    const newFilters = {
      image: false,
      audio: false,
      video: false,
      [name]: true,
    };
    setFilters(newFilters);
    setLoading(false);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    handleAPIRequest();
  };

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <NasaContext.Provider
      value={{
        data,
        query,
        loading,
        filters,
        setQuery,
        handleAPIRequest,
        handleChange,
        handleFormSubmit,
        handleFilterChange,
      }}
    >
      {children}
    </NasaContext.Provider>
  );
}
