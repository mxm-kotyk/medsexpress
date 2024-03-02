const Joi = require("joi");

module.exports = Joi.object({
  name: Joi.string().required().messages({
    "string.empty": `"name" cannot be an empty field`,
    "any.required": `missing required "name" field`,
  }),
  price: Joi.number().required().messages({
    "string.empty": `"price" cannot be an empty field`,
    "any.required": `missing required "price" field`,
  }),
  store: Joi.string().required().messages({
    "string.empty": `"store" cannot be an empty field`,
    "any.required": `missing required "store" field`,
  }),
});
