import { Schema, model } from 'mongoose'

const productSchema = new Schema({
    name: {type: String, required: true},
    price: {type: Number, required: true},
    imgURL: {type: String, required: true}
    
}, {
    timestamps: true,
    versionKey: false
})

export default model('Product', productSchema)