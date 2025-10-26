import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Cart from "./features/cart/Cart";

export default function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <div className="max-w-5xl mx-auto p-6">
        <h2 className="text-2xl font-bold mb-4">Products</h2>
        <ProductList />
        <Cart />
      </div>
    </div>
  );
}
