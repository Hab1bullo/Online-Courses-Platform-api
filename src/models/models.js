import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";



export const User = sequelize.define("users", {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    role: {
        type: DataTypes.ENUM(['student', 'instructor', 'admin']),
        allowNull: false,
        defaultValue: "student"
    }

});






export const Course = sequelize.define("courses", {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    price: {
        type: DataTypes.DECIMAL,
        allowNull: false
    }
});



export const Enrollment = sequelize.define('enrollments', {
    user_id: {
        type: DataTypes.INTEGER,
        references: {
            model: User,
            key: 'id'
        }
    },
    course_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Course,
            key: 'id'
        }
    }
}, { underscored: true })



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



export const Lesson = sequelize.define("lessons", {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    module_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Module,
            key: 'id'
        }
    }
}, { underscored: true });


export const Assignment = sequelize.define('assignments', {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lesson_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Lesson,
            key: "id"
        }
    }
}, { underscored: true })



export const Submission = sequelize.define("submissions", {
    assignment_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Assignment,
            key: 'id'
        }
    },
    user_id: {
        type: DataTypes.INTEGER,
        references: {
            model: User,
            key: 'id'
        }
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    grade: {
        type: DataTypes.DECIMAL,
        allowNull: false
    }
}, { underscored: true });


User.hasMany(Course);
Course.belongsTo(User);

User.hasMany(Enrollment);
Enrollment.belongsTo(User);

User.hasMany(Assignment);
Assignment.belongsTo(User);

User.hasMany(Submission);
Submission.belongsTo(User)

Module.hasMany(Lesson);
Lesson.belongsTo(Module);

Course.hasMany(Module);
Module.belongsTo(Course);
