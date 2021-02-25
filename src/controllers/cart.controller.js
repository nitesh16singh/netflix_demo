import HttpStatus from 'http-status-codes';
import * as CartService from '../services/cart.service';

/**
 * Controller to get all Cart available
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const getAllCart = async (req, res, next) => {
  try {
    const { userId } = req.params;
    const data = await CartService.getAllCart({ userId });
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: data,
      message: 'All Carts fetched successfully'
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Controller to get a single Cart
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const getCart = async (req, res, next) => {
  try {
    const data = await CartService.getCart(req.params._id);
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: data,
      message: 'Cart fetched successfully'
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Controller to create a new Cart
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const newCart = async (req, res, next) => {
  try {
    const data = await CartService.newCart(req.body);
    res.status(HttpStatus.CREATED).json({
      code: HttpStatus.CREATED,
      data: data,
      message: 'Cart created successfully'
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Controller to create a new Cart
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const newCartBulk = async (req, res, next) => {
  try {
    const data = await CartService.newCartBulk(req.body);
    res.status(HttpStatus.CREATED).json({
      code: HttpStatus.CREATED,
      data: data,
      message: 'Cart created successfully'
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Controller to update a Cart
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const updateCart = async (req, res, next) => {
  try {
    const data = await CartService.updateCart(req.params._id, req.body);
    res.status(HttpStatus.ACCEPTED).json({
      code: HttpStatus.ACCEPTED,
      data: data,
      message: 'Cart updated successfully'
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Controller to delete a Cart
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const deleteCart = async (req, res, next) => {
  try {
    await CartService.deleteCart(req.params._id);
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: [],
      message: 'Cart deleted successfully'
    });
  } catch (error) {
    next(error);
  }
};
export const calculateAmount = async (req, res, next) => {
  const { userId } = req.params;
  const data = await CartService.totalPriceOfCart(userId);
  res.status(HttpStatus.ACCEPTED).json({
    code: HttpStatus.ACCEPTED,
    data: data,
    message: 'Cart updated successfully'
  });
};
