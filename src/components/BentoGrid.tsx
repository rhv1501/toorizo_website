
import { Link } from "react-router-dom";

interface BentoItem {
  title: string;
  image: string;
  link: string;
  size?: "small" | "medium" | "large";
}

interface BentoGridProps {
  items: BentoItem[];
}

const BentoGrid = ({ items }: BentoGridProps) => {
  // Function to determine the size class
  const getSizeClass = (size?: "small" | "medium" | "large") => {
    switch (size) {
      case "small":
        return "col-span-1 row-span-1";
      case "medium":
        return "col-span-1 md:col-span-2 row-span-1";
      case "large":
        return "col-span-1 md:col-span-2 row-span-2";
      default:
        return "col-span-1 row-span-1";
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
      {items.map((item, index) => (
        <div
          key={index}
          className={`${getSizeClass(
            item.size
          )} bento-item group rounded-lg overflow-hidden animate-on-scroll ${
            index % 3 === 0 ? "delay-100" : index % 3 === 1 ? "delay-200" : "delay-300"
          }`}
        >
          <Link to={item.link} className="block h-full">
            <div className="h-full overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="bento-overlay">
                <h3 className="bento-title">{item.title}</h3>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BentoGrid;
