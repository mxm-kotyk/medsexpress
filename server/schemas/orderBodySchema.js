const Joi = require("joi");

module.exports = Joi.object({
  name: Joi.string().required().messages({
    "string.empty": `"name" cannot be an empty field`,
    "any.required": `missing required "name" field`,
  }),
  email: Joi.string().required().messages({
    "string.empty": `"email" cannot be an empty field`,
    "any.required": `missing required "email" field`,
  }),
  phone: Joi.string().required().messages({
    "string.empty": `"phone" cannot be an empty field`,
    "any.required": `missing required "phone" field`,
  }),
  address: Joi.string().required().messages({
    "string.empty": `"address" cannot be an empty field`,
    "any.required": `missing required "address" field`,
  }),
  items: Joi.array()
    .items(
      Joi.object({
        itemName: Joi.string().required(),
        price: Joi.number().required(),
        quantity: Joi.number().required(),
        store: Joi.string().required(),
        _id: Joi.string().required(),
      })
    )
    .required(),
});
