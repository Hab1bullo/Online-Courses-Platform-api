import { Course } from "../models/models.js";
import { courseValid } from "../validations/course.valid.js";



export const createCourse = async (req, res ) => {
    try {
        
        courseValid(req.body);

        const { title, description, price} = req.body;

        const course = await Course.create({
            title: title,
            description: description,
            price: price
        });

        return res.status(201).send({
            message: "Course created",
            course: course
        });

    } catch (e) {
        console.log(e)
        return res.status(500).send({
            message: "Server Error",
            error: e
        });
    }
}