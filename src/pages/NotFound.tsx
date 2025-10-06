
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Layout from "../components/Layout";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <Layout>
      <div className="min-h-[70vh] flex items-center justify-center">
        <div className="text-center max-w-lg px-4">
          <h1 className="text-8xl font-playfair font-bold text-toorizo-gold mb-6">404</h1>
          <h2 className="text-3xl font-playfair mb-6 text-toorizo-dark">Page Not Found</h2>
          <p className="text-xl text-gray-600 mb-10">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Link to="/" className="btn-primary">
            Return to Home
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
