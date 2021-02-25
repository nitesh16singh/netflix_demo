import express from 'express';
const router = express.Router();

import productRoute from './product.route';
import cartsRoute from './cart.route';
/**
 * Function contains Application routes
 *
 * @returns router
 */
const routes = () => {
  router.get('/', (req, res) => {
    return res.send('health check ');
  });
  router.use('/product', productRoute);
  router.use('/cart', cartsRoute);

  return router;
};

export default routes;
