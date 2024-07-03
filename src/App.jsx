import { useState, useEffect } from "react";
import axios from "axios";
import Grid from "./components/Grid";
import InfiniteScroll from "react-infinite-scroll-component";

function App() {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");

  const [page, setPage] = useState(1);

  //Function and effect to handle the API Call for the default page load.

  // async function handleNextReload() {
  //   const res = await axios.get(next);
  //   setData(prev => [...prev, ...res.data.collection.items])
  //   setPage(prev => prev + 1)
  // }
  async function handleAPIRequest(q = "nebula") {
    const res = await axios.get(
      `https://images-api.nasa.gov/search?q=${q}&page=${page}`
    );
    console.log(res.data.collection);
    setData((prev) => [...prev, ...res.data.collection.items]);
  }

  useEffect(() => {
    handleAPIRequest();
  }, []);

  function handleFormSubmit(e) {
    e.preventDefault();
    console.log(e.target.value, query);
    // handleAPIRequest(query);
  }

  return (
    <>
      <div className="flex flex-col justify-center gap-4 items-center">
        <h1 className="text-blue-600 text-3xl text-center">
          NASA Images and Videos Library
        </h1>

        <form className="mx-auto my-4" onSubmit={handleFormSubmit}>
          <input
            type="text"
            name="query"
            id="query"
            value={query}
            placeholder="Search for ... (e.g. Apollo)"
            className="text-2xl rounded-lg border-4 border-blue-300 hover:border-blue-500 border-r-6 mx-auto p-4"
            onChange={(e) => setQuery(e.target.value)}
          />{" "}
        </form>
      </div>

      <Grid data={data} />
    </>
  );
}

export default App;
