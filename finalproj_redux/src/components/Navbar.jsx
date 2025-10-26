import { useSelector } from "react-redux";

export default function Navbar() {
  const { totalQuantity, totalAmount } = useSelector((state) => state.cart);

  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between items-center shadow-md">
      <h1 className="text-xl font-bold">🛒 Redux Shopping Cart</h1>
      <div>
        <span className="font-medium mr-4">Items: {totalQuantity}</span>
        <span className="font-medium">Total: ${totalAmount.toFixed(2)}</span>
      </div>
    </nav>
  );
}
