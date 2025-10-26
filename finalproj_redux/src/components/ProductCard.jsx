import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";

export default function ProductCard({ product }) {
  const dispatch = useDispatch();

  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-lg transition bg-white flex flex-col">
      <img src={product.image} alt={product.name} className="h-40 object-contain mb-3" />
      <h3 className="font-semibold text-lg">{product.name}</h3>
      <p className="text-gray-600 mb-2">${product.price}</p>
      <button
        onClick={() => dispatch(addToCart(product))}
        className="mt-auto bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
      >
        Add to Cart
      </button>
    </div>
  );
}
