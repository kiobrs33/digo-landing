import { useState, useMemo, useEffect } from "react";
import { Link } from "react-router-dom";
import { mockProducts } from "../mock/cartMock";
import { useCartService } from "../services/useCartService";

const PRODUCTS_PER_PAGE = 5;

export const ProductsPage = () => {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [priceRange, setPriceRange] = useState<[number, number]>(() => {
    const prices = mockProducts.map((p) => p.price);
    return [Math.min(...prices), Math.max(...prices)];
  });

  const categories = useMemo(() => {
    const unique = new Set(mockProducts.map((p) => p.category));
    return ["all", ...Array.from(unique)];
  }, []);

  const minPrice = useMemo(
    () => Math.min(...mockProducts.map((p) => p.price)),
    []
  );
  const maxPrice = useMemo(
    () => Math.max(...mockProducts.map((p) => p.price)),
    []
  );

  const filteredProducts = useMemo(() => {
    return mockProducts.filter((product) => {
      const matchesCategory =
        selectedCategory === "all" || product.category === selectedCategory;
      const matchesSearch = product.name
        .toLowerCase()
        .includes(search.toLowerCase());
      const matchesPrice =
        product.price >= priceRange[0] && product.price <= priceRange[1];
      return matchesCategory && matchesSearch && matchesPrice;
    });
  }, [search, selectedCategory, priceRange]);

  const totalPages = Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE);
  const displayedProducts = filteredProducts.slice(
    (currentPage - 1) * PRODUCTS_PER_PAGE,
    currentPage * PRODUCTS_PER_PAGE
  );

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) setCurrentPage(page);
  };

  // const { getProducts } = useCartService();

  return (
    <div className="flex sm:flex-wrap gap-6">
      <div className="w-64">
        {/* Filtros */}
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-semibold">Filtros</h2>

          {/* Buscar */}
          <input
            type="text"
            placeholder="Buscar por nombre..."
            className="border p-2 rounded w-full md:max-w-xs"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setCurrentPage(1);
            }}
          />

          {/* Filtro por precio */}
          <div>
            <label className="font-medium block mb-1">
              Rango de precios: S/.{priceRange[0]} - S/.{priceRange[1]}
            </label>
            <div className="flex gap-2 items-center">
              <input
                type="range"
                min={minPrice}
                max={maxPrice}
                value={priceRange[0]}
                onChange={(e) =>
                  setPriceRange([Number(e.target.value), priceRange[1]])
                }
                className="w-full"
              />
              <input
                type="range"
                min={minPrice}
                max={maxPrice}
                value={priceRange[1]}
                onChange={(e) =>
                  setPriceRange([priceRange[0], Number(e.target.value)])
                }
                className="w-full"
              />
            </div>
          </div>

          {/* Categoría */}
          <select
            value={selectedCategory}
            onChange={(e) => {
              setSelectedCategory(e.target.value);
              setCurrentPage(1);
            }}
            className="border p-2 rounded"
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat === "all" ? "Todas las categorías" : cat}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="flex-1">
        <h2 className="text-2xl font-semibold mb-6">Productos</h2>

        {/* Productos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {displayedProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-lg transition duration-300"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 space-y-2">
                <h3 className="text-lg font-bold text-gray-800">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-500 truncate">
                  {product.description}
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span className="italic">Categoría: {product.category}</span>
                  <span className="text-blue-600 font-semibold">
                    S/.{product.price}
                  </span>
                </div>
                <div className="flex items-center gap-1 text-yellow-400">
                  {[...Array(5)].map((_, index) => (
                    <svg
                      key={index}
                      className={`w-5 h-5 ${
                        index < Math.round(product.rating)
                          ? "fill-yellow-400"
                          : "fill-gray-300"
                      }`}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.95a1 1 0 00.95.69h4.153c.969 0 1.371 1.24.588 1.81l-3.36 2.44a1 1 0 00-.364 1.118l1.285 3.95c.3.921-.755 1.688-1.538 1.118l-3.36-2.44a1 1 0 00-1.175 0l-3.36 2.44c-.783.57-1.838-.197-1.538-1.118l1.285-3.95a1 1 0 00-.364-1.118l-3.36-2.44c-.783-.57-.38-1.81.588-1.81h4.153a1 1 0 00.95-.69l1.286-3.95z" />
                    </svg>
                  ))}
                </div>
                <Link
                  to={`/client/products/${product.id}`}
                  className="block text-center mt-3 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
                >
                  Ver detalles
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Paginación */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-6 space-x-2">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-3 py-1 border rounded disabled:opacity-50"
            >
              Anterior
            </button>
            {[...Array(totalPages)].map((_, idx) => (
              <button
                key={idx}
                onClick={() => handlePageChange(idx + 1)}
                className={`px-3 py-1 border rounded ${
                  currentPage === idx + 1 ? "bg-blue-500 text-white" : ""
                }`}
              >
                {idx + 1}
              </button>
            ))}
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="px-3 py-1 border rounded disabled:opacity-50"
            >
              Siguiente
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
