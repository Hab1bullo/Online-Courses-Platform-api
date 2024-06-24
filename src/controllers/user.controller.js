import { Assignment, User } from "../models/models.js"
import { userValid } from "../validations/user.valid.js";


export const createUser = async (req, res) => {
    try {
        userValid(req.body);

        const { name, email, password, role } = req.body;

      

        const user = await User.create({
            name: name,
            email: email,
            password: password,
            role: role
        });


        return res.status(201).send({
            message: "User created",
        });

    } catch (e) {
        console.log(e)
        return res.status(500).send({
            message: "Server Error",
            error: e
        });
    }
}


export const getOneUser = async(req, res) => {
    try {
        
        const user = await User.findOne({
            where: {
                id: 1
            },
            include: [Assignment]
        });


        return res.status(201).send({
            message: "User created",
            users: user
        });

    } catch (e) {
        console.log(e)
        return res.status(500).send({
            message: "Server Error",
            error: e
        });
    }
}