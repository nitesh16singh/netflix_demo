import HttpStatus from 'http-status-codes';
import * as ProductService from '../services/product.service';

/**
 * Controller to get all product available
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const getAllProduct = async (req, res, next) => {
  try {
    const data = await ProductService.getAllProduct();
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: data,
      message: 'All Products fetched successfully'
    });
  } catch (error) {
    next(error);
  }
};
/**
 * Controller to get all product in search
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const searchProduct = async (req, res, next) => {
  try {
    const data = await ProductService.searchProduct(req.params.text);
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: data,
      message: 'All Products fetched successfully'
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Controller to get a single Product
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const getProduct = async (req, res, next) => {
  try {
    const data = await ProductService.getProduct(req.params._id);
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: data,
      message: 'Product fetched successfully'
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Controller to create a new Product
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const newProduct = async (req, res, next) => {
  try {
    const data = await ProductService.newProduct(req.body);
    res.status(HttpStatus.CREATED).json({
      code: HttpStatus.CREATED,
      data: data,
      message: 'Product created successfully'
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Controller to create a new Product
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const newProductBulk = async (req, res, next) => {
  try {
    const data = await ProductService.newProductBulk(req.body);
    res.status(HttpStatus.CREATED).json({
      code: HttpStatus.CREATED,
      data: data,
      message: 'Product created successfully'
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Controller to update a Product
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const updateProduct = async (req, res, next) => {
  try {
    const data = await ProductService.updateProduct(req.params._id, req.body);
    res.status(HttpStatus.ACCEPTED).json({
      code: HttpStatus.ACCEPTED,
      data: data,
      message: 'Product updated successfully'
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Controller to delete a Product
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const deleteProduct = async (req, res, next) => {
  try {
    await ProductService.deleteProduct(req.params._id);
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: [],
      message: 'Product deleted successfully'
    });
  } catch (error) {
    next(error);
  }
};
