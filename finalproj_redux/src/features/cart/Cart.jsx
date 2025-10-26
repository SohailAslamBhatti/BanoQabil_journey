import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "./cartSlice";
import CartItem from "./CartItem";

export default function Cart() {
  const { cartItems, totalAmount } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  if (cartItems.length === 0)
    return <p className="text-center text-gray-600 mt-6">Your cart is empty.</p>;

  return (
    <div className="mt-10 bg-white p-6 rounded shadow-md">
      <h2 className="text-xl font-semibold mb-4">Your Cart</h2>
      {cartItems.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
      <div className="flex justify-between items-center mt-6">
        <h3 className="font-semibold">Total: ${totalAmount.toFixed(2)}</h3>
        <button
          onClick={() => dispatch(clearCart())}
          className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600"
        >
          Clear Cart
        </button>
      </div>
    </div>
  );
}
