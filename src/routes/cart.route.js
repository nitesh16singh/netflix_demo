import express from 'express';
import * as cartController from '../controllers/cart.controller';
import { newCartValidator } from '../validators/cart.validator';

const router = express.Router();

//route to get all Cart
router.get('/:userId', cartController.getAllCart);
router.get('/calculate_price/:userId', cartController.calculateAmount);

//route to create a new  Cart
router.post('/', newCartValidator, cartController.newCart);
// router.post('/bulk', newCartValidatorArray, cartController.newCartBulk);

//route to delete a single Cart
// router.delete('/:_id', cartController.deleteCart);

export default router;
