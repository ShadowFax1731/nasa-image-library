import Loading from "./Loading";
import Input from "./Input";
import Grid from "./Grid";

const Home = ({
  loading,
  handleChange,
  handleFormSubmit,
  onFilterChange,
  data,
  query,
  filters,
}) => {
  return (
    <div className="flex flex-col bg-slate-800">
      <Input
        handleChange={handleChange}
        handleFormSubmit={handleFormSubmit}
        onFilterChange={onFilterChange}
        query={query}
        filters={filters}
      />
      {loading ? <Loading /> : <Grid data={data} />}
    </div>
  );
};

export default Home;
