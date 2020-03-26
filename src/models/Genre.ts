import { Sequelize, DataTypes, Model } from "sequelize";
import { sequelize } from "../sequelize";


// const sequelize = new Sequelize('sqlite::memory');

class Genre extends Model {
	id: number;
	name: string;
	imageURL: string;
}

Genre.init({
	id: {
		type: DataTypes.INTEGER,
		allowNull: false,
		primaryKey: true,
		autoIncrement: true,
	},
	name: {
		type: DataTypes.STRING,
		allowNull: false
	},
	imageURL: {
		type: DataTypes.STRING,
		allowNull: false
	}
}, {
	sequelize,
	modelName: "Genre",
	tableName: "Genre"
})

export default Genre;