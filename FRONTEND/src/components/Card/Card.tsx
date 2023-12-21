import { Products } from "../../interfaces/products.interface";

type CardProps = {
  CardProducts: Products[];
};

export default function Card({ CardProducts }: CardProps) {
  return (
    <div className=" max-w-5xl flex justify-between px-5">
      {CardProducts?.map((product) => {
        return (
          <div key={product.id} className="card w-96 bg-base-100 shadow-xl">
            <figure>
              <img
                src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{product.title}</h2>
              <p>{product.description}</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Excluir</button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
