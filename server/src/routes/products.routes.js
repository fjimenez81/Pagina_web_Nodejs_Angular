import { Router } from 'express'

import * as ProductsCtrl from '../controllers/products.controller'
import { authJwt } from '../middlewares'

const router = Router()

router.get('/', ProductsCtrl.getProducts)
router.post('/', [authJwt.verifyToken, authJwt.isAdmin], ProductsCtrl.createProduct)
router.get('/:productId', ProductsCtrl.getProductById)
router.put('/:productId', [authJwt.verifyToken, authJwt.isAdmin], ProductsCtrl.updateProductById)
router.delete('/:productId', [authJwt.verifyToken, authJwt.isAdmin], ProductsCtrl.deleteProductById)

export default router