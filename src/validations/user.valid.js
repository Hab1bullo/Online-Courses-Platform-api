import Joi from "joi";



export const userValid = (body) => {


    const schema = Joi.object({
        name: Joi.string().required(),
        email: Joi.string().email().required(),
        password: Joi.string().min(5).max(16).required(),
        role: Joi.string().valid('student', 'instructor', 'admin')
    });

    const { error } = schema.validate(body);

    if(error) throw error
}