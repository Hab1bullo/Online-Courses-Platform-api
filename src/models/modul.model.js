import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";
import { Course } from "./course.model.js";



export const Module = sequelize.define("modules", {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    course_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Course,
            key: 'id'
        }
    }
}, { underscored: true });