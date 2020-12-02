
import { Router } from 'express'
const router = Router()

import * as usersCtrl from '../controllers/users.controller'

router.get('/', usersCtrl.getUsers)
router.post('/', usersCtrl.createUser)
router.get('/:id', usersCtrl.getOnly_User)
router.put('/:id', usersCtrl.editUser)
router.delete('/:id', usersCtrl.deleteUser)

/////////////////////////////////////

router.post("/register", usersCtrl.Register)
router.post("/login", usersCtrl.Login)

export default router