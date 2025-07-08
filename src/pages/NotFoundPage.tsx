import { Link } from "react-router";
import { useNavigate } from "react-router";
import { useEffect, useState } from "react";

export default function NotFoundPage() {

  const initialTimer = 5;

  const [timer, setTimer] = useState(initialTimer);
  const navigate = useNavigate();

  useEffect(() => {
    const idInterval = setInterval(() => {
      setTimer((prevTimer) => {
        console.log(prevTimer);
        return prevTimer - 1;
      });
    }, 1000);
    const idTimeout = setTimeout(() => navigate("/"), 5000);
    return () => {
      clearInterval(idInterval);
      clearTimeout(idTimeout);
    };
  }, [navigate]);

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-2xl font-bold animate-bounce py-4">Page Not Found</h1>
      <p className="text-lg mt-4">
        The page you are looking for does not exist.
      </p>
      <p className="text-lg mt-2">
        Return to the{" "}
        <Link className="text-blue" to="/">
          home page
        </Link>
      </p>
      <div className="flex items-center  max-w-xl mx-auto bg-gray-200 rounded-full mb-5 mt-7 px-5">
        <p className="text-lg font-bold">
          Volviendo a la{" "}
          <a className="underline" href="/">
            PÁGINA PRINCIPAL
          </a>{" "}
          en {timer}...
        </p>
      </div>
    </div>
  );
}