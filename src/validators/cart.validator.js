import Joi from '@hapi/joi';

export const newCartValidator = (req, res, next) => {
  const schema = Joi.object({
    quantity: Joi.number().required(),
    product: Joi.string().required(),
    userId: Joi.string().required()
  }).unknown();
  const { error, value } = schema.validate(req.body);
  if (error) {
    next(error);
  } else {
    req.validatedBody = value;
    next();
  }
};
export const newCartValidatorArray = (req, res, next) => {
  const schema = Joi.object({
    quantity: Joi.number().required(),
    product: Joi.string().required(),
    userId: Joi.string().required()
  }).unknown();

  for (let i = 0; i < req.body; i++) {
    const data = req.body[0];
    const { error, value } = schema.validate(data);
    if (error) {
      next(error);
    }
  }
  next();
};
