module.exports = function (sequelize, Sequelize) {
  const { DataTypes } = require("sequelize");
  const Products = sequelize.define(
    "products",
    {
      name: {
        type: DataTypes.STRING,
      },
      description: {
        type: DataTypes.STRING,
      },
      price: {
        type: DataTypes.FLOAT,
      },
      status: {
        type: DataTypes.STRING,
      },
      category_id: {
        type: DataTypes.INTEGER,
      },
    },
    {
      createdAt: "created_at",
      updatedAt: "updated_at",
    }
  );
  Products.sync();

  return Products;
};
