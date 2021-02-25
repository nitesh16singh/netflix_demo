import express from 'express';
import * as productController from '../controllers/product.controller';
import {
  newProductValidator,
  newProductValidatorArray
} from '../validators/product.validator';

const router = express.Router();

//route to get all product
router.get('/', productController.getAllProduct);
router.get('/search/:text', productController.searchProduct);
router.get('/:_id', productController.getProduct);

//route to create a new  product
router.post('/', newProductValidator, productController.newProduct);
router.post(
  '/bulk',
  newProductValidatorArray,
  productController.newProductBulk
);

//route to delete a single product
router.delete('/:_id', productController.deleteProduct);

export default router;
