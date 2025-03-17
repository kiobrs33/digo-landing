import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 px-6">
      <h1 className="text-9xl font-extrabold text-primary animate-bounce">
        404
      </h1>
      <p className="text-2xl md:text-3xl font-semibold mt-4">
        ¡Oops! Página no encontrada
      </p>
      <p className="text-gray-600 dark:text-gray-400 mt-2">
        La página que buscas no existe o ha sido movida.
      </p>
      <a
        href="/"
        className="mt-6 px-6 py-3 bg-secondary text-white rounded-lg text-lg font-semibold shadow-md hover:bg-secondary-light transition duration-300"
      >
        Volver al Inicio
      </a>
    </div>
  );
};

export default NotFound;
