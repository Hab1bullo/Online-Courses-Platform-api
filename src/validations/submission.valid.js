import Joi from "joi";

export const submissionValid = (body) => {

    const schema = Joi.object({
        assignment_id: Joi.number().positive().required(),
        user_id: Joi.number().positive().required(),
        content: Joi.string().max(100).required(),
        grade: Joi.number().positive().required()
    });

    const { error } = schema.validate(body);
    if(error) throw error;
}