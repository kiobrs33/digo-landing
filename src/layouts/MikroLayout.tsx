import { useAuthContext } from "@/modules/auth/context/AuthContext";
import { Package, ShoppingCart } from "lucide-react";
import { Link, Outlet, useLocation } from "react-router-dom";

export const MikroLayout = () => {
  const location = useLocation();
  const { dispatch } = useAuthContext();

  const navItems = [
    // { label: "Inicio", path: "/client/dashboard", icon: <Home size={20} /> },
    {
      label: "Productos",
      path: "/client/products",
      icon: <Package size={20} />,
    },
    {
      label: "Carrito",
      path: "/client/cart",
      icon: <ShoppingCart size={20} />,
    },
  ];

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Navbar */}
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-xl font-bold text-blue-600">Digo Internet</h1>
          <nav className="flex gap-6">
            {/* {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-1 text-sm font-medium transition ${
                  location.pathname === item.path
                    ? "text-blue-600"
                    : "text-gray-600 hover:text-blue-500"
                }`}
              >
                {item.icon}
                {item.label}
              </Link>
            ))} */}
            <button
              type="button"
              onClick={handleLogout}
              className="bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-500 transition"
            >
              Salir
            </button>
          </nav>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1 container mx-auto px-6 py-8">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-white border-t mt-10">
        <div className="container mx-auto px-6 py-4 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} MiTienda. Todos los derechos reservados.
        </div>
      </footer>
    </div>
  );
};
