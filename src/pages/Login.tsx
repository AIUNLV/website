import { useState, FormEvent } from "react";
import { Link } from "react-router-dom";
import EyeToggle from "../components/EyeToggle";

const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");

  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    const allowedDomains = ["unlv.nevada.edu", "unlv.edu"];
    const emailDomain = email.split("@")[1];

    if (!allowedDomains.includes(emailDomain)) {
      setError("Email must be from unlv.nevada.edu or unlv.edu");
      return;
    }

    setError("");

    // just for testing
    alert(`Email: ${email}, Password: ${password}`);

    // flask backend later
  };

  return (
    <div className="min-h-[85vh] flex items-center justify-center bg-gradient-to-b from-white to-gray-300 ">
      <div className="bg-white p-6 rounded-lg shadow-2xl w-full max-w-md md:mx-0 mx-10">
        <h2 className="text-2xl font-bold mb-6">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-3 border border-gray-300 rounded-lg shadow-inner"
            />
            {error && <p className="text-red-600 ml-2 mb-4">{error}</p>}
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <div className="relative">
              <input
                type={isVisible ? "text" : "password"}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full p-3 border border-gray-300 rounded-lg shadow-inner"
              />
              <div className="absolute right-3 top-[40%] transform -translate-y-1/4 flex items-center cursor-pointer">
                <EyeToggle isVisible={isVisible} onToggle={toggleVisibility} />
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <button
              type="submit"
              className="py-4 px-8 rounded-lg text-white transition-all duration-500
            bg-gradient-to-tl from-primary via-red-600 to-primary bg-[length:200%_200%] bg-[0%_0%] hover:bg-[100%_100%]"
            >
              Login
            </button>
            <Link
              to="/signup"
              className="hover:text-primary transition-colors duration-300 mr-2"
            >
              Create Account?
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
