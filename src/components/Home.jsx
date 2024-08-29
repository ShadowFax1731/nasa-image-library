import Loading from "./Loading";
import Input from "./Input";
import Grid from "./Grid";

const Home = ({ loading, handleChange, handleSubmit, data }) => {
  return (
    <div className="flex flex-col bg-slate-800">
      {loading ? (
        <Loading />
      ) : (
        <Input handleChange={handleChange} handleSubmit={handleSubmit} />
      )}
      <Grid data={data} />
    </div>
  );
};

export default Home;
