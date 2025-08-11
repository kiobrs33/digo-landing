const mockCart = [
  { id: 1, name: "Mouse Gamer", quantity: 1, price: 59.99 },
  { id: 2, name: "Teclado Mecánico", quantity: 2, price: 99.99 },
  { id: 3, name: "Teclado Mecánico", quantity: 5, price: 60 },
  { id: 4, name: "Teclado Mecánico", quantity: 3, price: 30 },
  { id: 5, name: "Teclado Mecánico", quantity: 7, price: 11 },
];

export const CartPage = () => {
  const total = mockCart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">Tu Carrito</h2>
      <div className="space-y-4">
        {mockCart.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-center bg-white shadow p-4 rounded-lg"
          >
            <div>
              <h3 className="font-bold">{item.name}</h3>
              <p className="text-sm text-gray-600">Cantidad: {item.quantity}</p>
            </div>
            <div className="font-semibold text-blue-600">
              S/.{(item.price * item.quantity).toFixed(2)}
            </div>
          </div>
        ))}
        <div className="text-right font-bold text-xl text-blue-700">
          Total: s/.{total.toFixed(2)}
        </div>
        <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-500 transition">
          Finalizar Compra
        </button>
      </div>
    </div>
  );
};
