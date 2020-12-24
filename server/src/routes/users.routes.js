
import { Router } from 'express'
const router = Router()

import * as usersCtrl from '../controllers/users.controller'
import { authJwt, verifyRegister } from '../middlewares'

router.get('/', usersCtrl.getUsers)

router.post('/', usersCtrl.createUser)

router.get('/:id', usersCtrl.getOnly_User)

// router.get('/:id',
//             [authJwt.verifyToken,
//             authJwt.isAdmin],
//             usersCtrl.getOnly_User)

router.put('/:id', usersCtrl.editUser)

router.delete('/:id',
                [authJwt.verifyToken,
                authJwt.isAdmin],
                usersCtrl.deleteUser)

/////////////////////////////////////

router.post("/register",
            [verifyRegister.checkDuplicateEmail,
            verifyRegister.checkRoleExist],
            usersCtrl.Register)

router.post("/login", usersCtrl.Login)


export default router