import User from '../models/User'
import jwt from 'jsonwebtoken';
import config from '../config'
import Role from '../models/Role';

export const Login = async (req, res) => {
    const userFound = await User.findOne({email: req.body.email}).populate("roles")

    if (!userFound) return res.status(400).json({message: "User not found"})

    const userMatch = await User.comparePassword(req.body.password, userFound.password)

    if (!userMatch) return res.status(401).json({token: null, message: "Invalid password"})

    const token = jwt.sign({name: userFound.name, id: userFound._id, roles: userFound.roles}, config.SECRET, {
        expiresIn: 86400
    })
    res.json({token})
}

export const Register = async (req, res) => {
    const {name, surname, address, city, email, password, roles} = req.body
    const newUser = new User({
        name,
        surname,
        address,
        city,
        email,
        password: await User.encriptPassword(password)
    })

    if (roles){
        const foundRoles = await Role.find({name: {$in: roles}})
        newUser.roles = foundRoles.map(role => role._id)
    } else {
        const role = await Role.findOne({name: "user"})
        newUser.roles = [role._id]
    }

    const userSaved = await newUser.save()

    const token = jwt.sign({id: userSaved._id}, config.SECRET, {
        expiresIn: 86400
    })
    res.json({token})
}

/////////////////////////////////////////////////////////////

export const getUsers = async (req, res) => {
    const Users = await User.find()
    res.json(Users)
}

export const createUser = async (req, res) => {
    const newUser = new User(req.body)
    await newUser.save()
    res.json({message: 'User created'})
}

export const getOnly_User = async (req, res) => {
    const user = await User.findOne(req.params.name)
    res.send(user)
}

export const editUser = async (req, res) => {
    await User.findByIdAndUpdate(req.params.id, req.body)
    res.json({status: 'User updated!'})
}

export const deleteUser = async (req, res) => {
    await User.findByIdAndDelete(req.params.id)
    res.json({status: 'User deleted!'})
}
