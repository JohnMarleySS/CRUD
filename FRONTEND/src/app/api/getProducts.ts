import ProductsIncrements from "@/@types/Products";
import axios from "axios";

const getProducts = async () => {
    const reseponse = await axios.get<ProductsIncrements[]>("http://localhost:7000/api");
    return reseponse.data;
};

export default getProducts