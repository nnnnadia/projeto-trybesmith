import Joi from 'joi';

export default Joi.object({
  productsIds: Joi.array().items(Joi.number().integer()).min(1).required(),
});
