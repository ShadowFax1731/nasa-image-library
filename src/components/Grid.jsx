import Card from "./Card";

const Grid = ({ data }) => {
  return (
    <div
      className="my-10 mx-auto grid grid-auto-rows-1fr grid-cols-1 gap-8 gap-y-8 justify-evenly
      md:grid-cols-3 sm:grid-cols-2 px-4"
    >
      {data.map((item, i) => (
        <Card item={item} key={i} />
      ))}
    </div>
  );
};

export default Grid;
