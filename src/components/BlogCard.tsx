
import { Link } from "react-router-dom";
import { Calendar } from "lucide-react";

interface BlogCardProps {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  author: string;
}

const BlogCard = ({ id, title, excerpt, image, date, author }: BlogCardProps) => {
  return (
    <div className="group animate-on-scroll">
      <div className="bg-white shadow-md overflow-hidden rounded-lg transition-all duration-300 hover:shadow-xl h-full flex flex-col">
        <div className="relative overflow-hidden">
          <Link to='#'>
            <img
              src={image}
              alt={title}
              className="w-full h-60 object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </Link>
        </div>
        <div className="p-6 flex flex-col flex-grow">
          <div className="flex items-center text-sm text-gray-500 mb-3">
            <Calendar size={16} className="mr-2" />
            <span>{date}</span>
          </div>
          <Link to='#'>
            <h3 className="text-xl font-playfair font-medium mb-3 group-hover:text-toorizo-gold transition-colors duration-300">
              {title}
            </h3>
          </Link>
          <p className="text-gray-600 mb-4 flex-grow">{excerpt}</p>
          <div className="flex justify-between items-center mt-auto">
            <span className="text-sm text-gray-500">By {author}</span>
            <Link
              to='#'
              className="text-toorizo-gold hover:text-toorizo-accent story-link font-medium"
            >
              Read More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
