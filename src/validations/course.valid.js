import Joi from "joi";


export const courseValid = (body) => {

    const schema = Joi.object({
        title: Joi.string().required(),
        description: Joi.string().required(),
        price: Joi.number().positive().required()
    });

    const { error } = schema.validate(body);

    if(error) throw error;
}