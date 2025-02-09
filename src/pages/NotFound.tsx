import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[85vh] text-center">
      <h1 className="text-[100px] font-bold text-primary">404</h1>
      <p className="text-3xl mt-4">Page not found :(</p>
      <Link to="/" className="mt-6 text-blue-500 hover:underline">
        Go back to Home
      </Link>
    </div>
  );
};

export default NotFound;
