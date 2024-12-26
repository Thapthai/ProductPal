module.exports = function (sequelize, Sequelize) {
  const { DataTypes } = require("sequelize");
  const Categories = sequelize.define(
    "categories",
    {
      name: {
        type: DataTypes.INTEGER,
      },
      description: {
        type: DataTypes.STRING,
      },
      status: {
        type: DataTypes.STRING,
      },
    },
    {
      createdAt: "created_at",
      updatedAt: "updated_at",
    }
  );
  Categories.sync();

  return Categories;
};
