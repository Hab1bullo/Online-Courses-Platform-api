import Joi from "joi";


export const assignmentValid = (body) => {

    const schema = Joi.object({
        title: Joi.string().required(),
        description: Joi.string().required(),
        lesson_id: Joi.number().positive().required()
    });

    const { error } = schema.validate(body);
    if(error) throw error
}