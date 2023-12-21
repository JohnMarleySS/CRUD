import { useEffect, useState } from "react";
import { Products } from "./interfaces/products.interface";
import Card from "./components/Card";

function App() {
  const [products, setProducts] = useState<Products[]>([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/")
      .then((response) => response.json())
      .then((response) => {
        setProducts(response);
      });
  }, []);

  return (
    <>
      <div>
        <Card CardProducts={products} />
      </div>
    </>
  );
}

export default App;
