import { sequelize } from "../config/db.js";


export const createTables = async (req, res) => {
    try {

        await sequelize.sync({ alter: true }); // `alter: true` jadvalni mavjud tuzilmaga moslash uchun

        return res.status(200).send({
            message: "Tables created"
        });

    } catch (e) {
        console.log(e);
        return res.status(500).send({
            message: "Server error",
            error: e
        });
    }
}