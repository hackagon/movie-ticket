import { Sequelize } from "sequelize";

/**
 * @todo    connect to db
 */
export const sequelize = new Sequelize({
    dialect: "mysql",
    database: "movie-ticket",
    username: "root",
    password: "hackagon",
    host: "localhost",
    port: 3306,
    define: {
        freezeTableName: true
    }
})

/**
 * @todo    testing connection
 */
sequelize.authenticate()
    .then(() => console.log("Connected to DB"))
    .catch(err => console.log(err))

/**
 * @todo    sync
 */
sequelize.sync({ alter: true })
    .then(() => console.log("Sync successfully"))
