import Card from "./Card";

const Grid = ({ data }) => {
  return (
    <div className="columns-1 sm:columns-2 md:columns-3 gap-4 px-4 space-y-4 my-10">
      {data.map((item, i) => (
        <div key={i} className="break-inside-avoid">
          <Card item={item} />
        </div>
      ))}
    </div>
  );
};

export default Grid;
