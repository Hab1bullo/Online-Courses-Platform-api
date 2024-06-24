import { Sequelize } from "sequelize";


const PG_URI = process.env.PG_URI
const PG_URI_2 = process.env.PG_URI_2

export const sequelize = new Sequelize(
    PG_URI_2,
    {
        dialect: "postgres"
    }
);

try {
    await sequelize.authenticate()
    console.log("Database Connected");
} catch (e) {
    console.log("Database connected error");
}