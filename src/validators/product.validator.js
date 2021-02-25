import Joi from '@hapi/joi';

export const newProductValidator = (req, res, next) => {
  const schema = Joi.object({
    name: Joi.string().required(),
    description: Joi.string().min(4).required(),
    price: Joi.number().min(0).required(),
    discountedPrice: Joi.number().min(0).required()
  });
  const { error, value } = schema.validate(req.body);
  if (error) {
    next(error);
  } else {
    req.validatedBody = value;
    next();
  }
};

export const newProductValidatorArray = (req, res, next) => {
  const schema = Joi.object({
    name: Joi.string().min(4).required(),
    description: Joi.string().min(4).required()
  });
  console.log(req.body);
  for (let i = 0; i < req.body; i++) {
    const data = req.body[0];
    const { error, value } = schema.validate(data);
    if (error) {
      next(error);
    }
  }
  next();
};
