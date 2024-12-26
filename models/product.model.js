const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize("ecommerce", "username", "password", {
  host: "localhost",
  dialect: "mysql",
});

const Product = sequelize.define("Product", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.TEXT },
  price: { type: DataTypes.FLOAT, allowNull: false },
  stock: { type: DataTypes.INTEGER, allowNull: false },
  created_at: { type: DataTypes.DATE, defaultValue: Sequelize.NOW },
});

module.exports = Product;
