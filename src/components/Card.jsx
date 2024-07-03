const Card = ({ data }) => {
  return (
    <div className="grid grid-cols-4 w-full mx-auto ">
      {data.map((item, i) => {
        console.log(item);
        return (
          <div key={i} className="m-4">
            <img
              src={item.links[0].href}
              alt={item.data[0].title}
              className="opacity-30 hover:opacity-100 transition-opacity duration-200"
            />
            <p>{item.data[0].title}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
