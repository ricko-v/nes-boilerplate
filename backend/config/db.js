import { Sequelize } from "sequelize";

const db = new Sequelize(process.env.dbname, process.env.dbusername, process.env.dbpassword, {
    host: process.env.dbhost,
    dialect: process.env.dbdialect
});

// export connection
export default db;