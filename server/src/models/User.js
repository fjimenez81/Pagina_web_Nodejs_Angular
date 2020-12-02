import { Schema, model } from 'mongoose'
import bcrypt from "bcryptjs";

const userSchema = new Schema({
    name: {type: String, required: true},
    surname: {type: String, required: true},
    address: {type: String, required: true},
    city: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    roles: [{
        ref: 'Role',
        type: Schema.Types.ObjectId
    }]

}, {
    timestamps: true,
    versionKey: false
})

userSchema.statics.encriptPassword = async (password) => {
    const salt = await bcrypt.genSalt(10)
    return await bcrypt.hash(password, salt)
}

userSchema.statics.comparePassword = async (password, recivedPassword) => {
    return await bcrypt.compare(password, recivedPassword)
}

export default model('User', userSchema)