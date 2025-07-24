import Loading from "./Loading";
import Input from "./Input";
import Grid from "./Grid";
import { useNasa } from "../contexts/NasaContext";

const Home = () => {
  const { loading, data } = useNasa();
  return (
    <div className="flex flex-col bg-slate-800">
      <Input />
      {loading ? <Loading /> : <Grid data={data} />}
    </div>
  );
};

export default Home;
