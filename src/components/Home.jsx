import Loading from "./Loading";
import Input from "./Input";
import Grid from "./Grid";
import { useNasa } from "../contexts/NasaContext";

const Home = () => {
  const { loading, data } = useNasa();
  return (
    <div className="w-full flex flex-col bg-gradient-to-r from-blue-800 to-red-700 animate-gradient-x">
      <Input />
      {loading ? <Loading /> : <Grid data={data} />}
    </div>
  );
};

export default Home;
