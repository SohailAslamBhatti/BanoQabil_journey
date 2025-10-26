import { useDispatch } from "react-redux";
import { increaseQty, decreaseQty, removeFromCart } from "./cartSlice";

export default function CartItem({ item }) {
  const dispatch = useDispatch();

  return (
    <div className="flex justify-between items-center border-b py-2">
      <div>
        <h3 className="font-medium">{item.name}</h3>
        <p className="text-sm text-gray-500">${item.price} × {item.quantity}</p>
      </div>

      <div className="flex items-center gap-2">
        <button onClick={() => dispatch(decreaseQty(item.id))} className="px-2 bg-gray-200 rounded">-</button>
        <span>{item.quantity}</span>
        <button onClick={() => dispatch(increaseQty(item.id))} className="px-2 bg-gray-200 rounded">+</button>
        <button onClick={() => dispatch(removeFromCart(item.id))} className="ml-3 text-red-500">🗑️</button>
      </div>
    </div>
  );
}
