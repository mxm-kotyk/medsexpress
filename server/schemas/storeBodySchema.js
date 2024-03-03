const Joi = require("joi");

module.exports = Joi.object({
  name: Joi.string().required().messages({
    "string.empty": `"name" cannot be an empty field`,
    "any.required": `missing required "name" field`,
  }),
  address: Joi.string().required().messages({
    "string.empty": `"address" cannot be an empty field`,
    "any.required": `missing required "address" field`,
  }),
});
