
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-6">
      <div className="text-center max-w-md">
        <h1 className="text-6xl font-display font-bold mb-4">404</h1>
        <div className="h-1 w-24 bg-statera-accent mx-auto mb-6"></div>
        <p className="text-xl text-statera-light mb-8">
          Oops! The page you're looking for cannot be found.
        </p>
        <Link to="/">
          <Button className="bg-statera hover:bg-statera-light text-white">
            Return to Home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
