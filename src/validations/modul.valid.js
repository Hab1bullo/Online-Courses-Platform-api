import Joi from "joi";


export const moduleValid = (body) => {

    const schema = Joi.object({
        title: Joi.string().required(),
        description: Joi.string().max(100).required(),
        course_id: Joi.number().positive().required()
    });

    const { error } = schema.validate(body);
 
    if(error) throw error;
}