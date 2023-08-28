"use client";

import { useEffect, useState } from "react";
import getProducts from "../api/getProducts";
import ProductsIncrements from "@/@types/Products";
import ButtonActive from "@/components/Button";

export default function Home() {
  const [products, setProducts] = useState<ProductsIncrements[] | []>([]);

  useEffect(() => {
    const reseponse = getProducts();
    reseponse.then(async (data) => {
      return setProducts(data);
    });
  }, []);

  if (!products) {
    return;
  }

  return (
    <div>
      <div className="overflow-x-auto flex flex-col items-center justify-center mt-10 px-6">
        <div className=" flex items-center justify-center w-full">
          <ButtonActive name="Adicinar produto +" />
        </div>
        <table className="table max-w-3xl mt-4">
          <thead>
            <tr>
              <td>Produto</td>
              <td>Descrição</td>
              <td>Preço</td>
            </tr>
          </thead>
          {products.map((item) => {
            return (
              <tbody key={item._id}>
                <tr>
                  <th>{item.title}</th>
                  <td>{item.description}</td>
                  <td>{item.price}</td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </div>
    </div>
  );
}
