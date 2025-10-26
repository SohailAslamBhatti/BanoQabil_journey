import ProductCard from "./ProductCard";

const products = [
  { id: 1, name: "Laptop", price: 1200, image: "https://via.placeholder.com/150" },
  { id: 2, name: "Headphones", price: 200, image: "https://via.placeholder.com/150" },
  { id: 3, name: "Smartphone", price: 800, image: "https://via.placeholder.com/150" },
  { id: 4, name: "Watch", price: 250, image: "https://via.placeholder.com/150" },
];

export default function ProductList() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
}
