import { Request, Response, NextFunction } from 'express';
import Joi from 'joi';
import loginSchema from '../validations/loginValidation';

const validate = (schema: Joi.ObjectSchema) => (req: Request, res: Response, next: NextFunction) => {
  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }
  next();
};

export default validate;



