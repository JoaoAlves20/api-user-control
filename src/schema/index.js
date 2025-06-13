import Joi from "joi";

export const schemaRegister = Joi.object({
    username: Joi.string().min(3).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(8).required(),
    role: Joi.string().valid('admin', 'user').required()
})

export const schemaLogin = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(8).required()
})

export const schemaUpdate = Joi.object({
    username: Joi.string().min(3).optional(),
    email: Joi.string().email().optional(),
    password: Joi.string().min(8).optional(),
    role: Joi.string().valid('admin', 'user').optional()
})