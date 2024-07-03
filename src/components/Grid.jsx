import Card from "./Card";
import InfiniteScroll from "react-infinite-scroll-component";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const Grid = ({ data }) => {
  return (
    <ResponsiveMasonry
      columnsCountBreakPoints={{ 300: 2, 500: 3, 700: 4, 900: 6 }}
    >
      <Masonry gutter="20px">
        {data.map((item, i) => {
          return (
            <div key={i} className="m-4">
              <img
                src={item.links[0].href}
                alt={item.data[0].title}
                className="opacity-30 hover:opacity-100 transition-opacity duration-200 cursor-pointer"
              />
              <p>{item.data[0].title}</p>
            </div>
          );
        })}
      </Masonry>
    </ResponsiveMasonry>
  );
};

export default Grid;
