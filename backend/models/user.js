import { Sequelize } from "sequelize";
import db from "../config/db";

const { DataTypes } = Sequelize;

const User = db.define('users', {
    username: {
        type: DataTypes.STRING
    },
    password: {
        type: DataTypes.STRING
    }
}, {
    timestamps: true,
    freezeTableName: true
});

export default User;