import Joi from "joi";


export const lessonValid = (body) => {

    const schema = Joi.object({
        title: Joi.string().required(),
        content: Joi.string().required(),
        module_id: Joi.number().positive().required()
    });

    const {error} = schema.validate(body);
    if(error) throw error
}