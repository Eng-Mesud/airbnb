import Joi from "joi";
export const Members_register_validation = (req, res, next) => {
    try {
      const schema = Joi.object({
        name: Joi.string().min(4).max(60).required(),
  
        phone: Joi.number().min(9).max(9).required(),
  
        guarante: Joi.string().trim(),
  
        guarantePhone: Joi.string().min(9).max(9).required().trim(),
      });
      const { error } = schema.validate(req.body);
      if (error) {
        console.log("Members registration validation : " + error
        );
        return res.status(403).json(error.details[0].message);
      }
      next();
    } catch (error) {}
  };