import { useEffect, useState } from "react";

export default async function getProducts() {
  const [produts, setProducts] = useState();

  useEffect(() => {
    fetch("http://localhost:3000/api/")
      .then((response) => response.json())
      .then((response) => {
        setProducts(response);
      });
  }, []);

  return {
    produts,
  };
}
