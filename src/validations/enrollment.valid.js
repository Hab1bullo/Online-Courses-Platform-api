import Joi from "joi";


export const enrollmentValid = (body) => {

    const schema = Joi.object({
        user_id: Joi.number().positive().required(),
        course_id: Joi.number().positive().required()
    });

    const { error } = schema.validate(body);
    if(error) throw error;
}