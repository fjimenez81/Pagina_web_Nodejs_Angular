import { Router } from 'express'

import * as ProductsCtrl from '../controllers/products.controller'
import { authJwt } from '../middlewares'

const router = Router()

router.get('/', ProductsCtrl.getProducts)
router.post('/', ProductsCtrl.createProduct)
router.get('/:productId', ProductsCtrl.getProductById)
router.put('/:productId', ProductsCtrl.updateProductById)
router.delete('/:productId', ProductsCtrl.deleteProductById)

export default router