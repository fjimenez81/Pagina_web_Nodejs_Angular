import { ROLES } from '../models/Role'
import User from '../models/User'

export const checkRoleExist = (req, res, next) => {
    if (req.body.roles) {
        for (let i = 0;i < req.body.roles.lenght; i++) {
            if (!ROLES.includes(req.body.roles[i])) {
                return res.status(400).json({
                    message: `Role ${req.body.roles[i]} does not exits!`
                })
            }
        }
    }
    next()
}

export const checkDuplicateEmail = async (req, res, next) => {
    try {
        
        const email = await User.findOne({email: req.body.email})
        if (email) return res.status(400).json({message: "The email already exits"})

        next()

    } catch (error) {
        res.status(500).json({message: "Error!"})
    }
}