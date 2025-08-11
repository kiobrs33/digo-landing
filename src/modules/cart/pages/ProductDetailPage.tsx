import { useParams } from "react-router-dom";
import { mockProducts } from "../mock/cartMock";


export const ProductDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const product = mockProducts.find((p) => p.id === Number(id));

  if (!product) return <div>Producto no encontrado</div>;

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-96 object-cover rounded-lg"
        />
        <div>
          <h2 className="text-3xl font-bold mb-2">{product.name}</h2>
          <p className="text-xl text-blue-600 font-semibold mb-4">
            S/.{product.price}
          </p>
          <p className="text-gray-700 mb-6">{product.description}</p>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-500 transition">
            Agregar al carrito
          </button>
        </div>
      </div>
    </div>
  );
};
