import mongoose from 'mongoose';
import Products from './inteface-model';

const { Schema } = mongoose;

const products = new Schema<Products>({
    title: String,
    description: String,
    price: Number
})

const mongooseModel = mongoose.model<Products>('produtos', products)

export default mongooseModel