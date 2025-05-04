import { DataTypes, Model, Sequelize } from "sequelize";
import "dotenv/config";

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: process.env.DBROUTE,
  logging: console.log,
});

class list extends Model {}

list.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    task: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    status: {
      type: DataTypes.ENUM("pending", "completed"),
      defaultValue: "pending",
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  },
  { sequelize, modelName: "list", tableName: "list", timestamps: true }
);

(async () => {
  try {
    await sequelize.authenticate();
    console.log("Conection with sql lite");
    await sequelize.sync({ alter: true });
    console.log("Model syncronized with the database");
  } catch (error) {
    console.error(`Error with connection with sqllite ${error}`);
  }
})();

export { sequelize, list };
