interface Products {
  title: string,
  description: string,
  price: number
}

interface ProductsIncrements extends Products {
  _id: number;
  __v: number;

}

  
export default ProductsIncrements